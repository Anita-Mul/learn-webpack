// https://blog.csdn.net/chiuwingyan/article/details/80696360
var load = require("bundle-loader!./a.js");

load(function (file) {
  document.open();
  document.write("<h1>" + file + "</h1>");
  document.close();
});
