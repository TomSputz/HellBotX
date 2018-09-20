const http = require("http");

http.createServer(function (req, res) {
  console.log("Server Pinged");
  setInterval(() => http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`), 900000);
  res.end();
}).listen(8080);
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);

require("./index.js").init()