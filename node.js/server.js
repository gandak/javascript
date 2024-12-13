const http = require("http");
const RomanNumeral = require("tonal-roman-numeral");
const toRoman = require("typescript-roman-numbers-converter");

http
  .createServer(function (req, res) {
    let x = RomanNumeral.decimal("IVXXVI");
    // const x = toRoman(num);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(x);
    res.end();
  })
  .listen(8080);
