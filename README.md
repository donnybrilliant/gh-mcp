# Grey Hack MCP Server

This repository implements an MCP (Model-Context Protocol) server for use with the Grey Hack game and the Cursor IDE.

## Features

- **Script Generation** – generate GreyScript templates for common tasks, such as scanning ports, cracking passwords, and more.
- **Extensible API** – additional script templates or language support can be added by editing the `src/greyScriptGenerator.ts`.
- **Node.js Server** – built with Express.js, the server exposes simple HTTP endpoints that Cursor can consume.

## Installation

To develop locally:

```bash
# clone the repository
git clone https://github.com/donnybrilliant/gh-mcp.git
cd gh-mcp
npm install
npm run build
npm start
```

By default the server listens on port `3760`. You can override this by setting the `PORT` environment variable.

## Usage

Call the `/generate-script` endpoint with a JSON body specifying the script type and optional parameters. For example:

```bash
curl -X POST http://localhost:3760/generate-script \
  -H "Content-Type: application/json" \
  -d '{"type":"port_scanner","options":{"host":"192.168.1.1","ports":[22,80,443]}}'
```

The response will include the generated GreyScript code.

## References

To author new scripts or understand available system functions, refer to the Grey Hack API documentation: <https://codedocs.ghtools.xyz/api/>.
