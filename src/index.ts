import express from 'express';
import bodyParser from 'body-parser';
import { generateScript } from './greyScriptGenerator';

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3760;

app.use(bodyParser.json());

// health check endpoint
app.get('/', (_req, res) => {
  res.json({ message: 'Grey Hack MCP server is running' });
});

// endpoint to generate GreyScript code snippets
app.post('/generate-script', (req, res) => {
  const { type, options } = req.body;
  if (!type) {
    res.status(400).json({ error: 'Missing script type' });
    return;
  }
  try {
    const code = generateScript(type, options || {});
    res.json({ type, code });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Grey Hack MCP server listening on port ${port}`);
});
