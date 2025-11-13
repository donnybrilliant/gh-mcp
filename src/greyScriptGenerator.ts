export function generateScript(type: string, options: any = {}): string {
  switch (type) {
    case "port_scanner":
      return [
        "// GreyScript Port Scanner",
        "var host = \"127.0.0.1\";",
        "var ports = [22, 80, 443];",
        "for (var i = 0; i < sizeof(ports); i++) {",
        "  var port = ports[i];",
        "  var socket = open_port(host, port);",
        "  if (socket) {",
        "    echo(\"Port \" + port + \" open\");",
        "    close_port(socket);",
        "  } else {",
        "    echo(\"Port \" + port + \" closed\");",
        "  }",
        "}",
      ].join("\\n");
    case "password_cracker":
      return [
        "// GreyScript Password Cracker",
        "var user = \"root\";",
        "var passwords = [\"1234\", \"password\", \"toor\"];",
        "for (var i = 0; i < sizeof(passwords); i++) {",
        "  var pass = passwords[i];",
        "  var shell = get_shell(user, pass);",
        "  if (shell) {",
        "    echo(\"Password found: \" + pass);",
        "    break;",
        "  } else {",
        "    echo(\"Attempt failed: \" + pass);",
        "  }",
        "}",
      ].join("\\n");
    default:
      throw new Error("Unknown script type: " + type);
  }
}
