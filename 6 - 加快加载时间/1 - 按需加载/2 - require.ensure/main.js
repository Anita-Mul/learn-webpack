// https://blog.csdn.net/hj0556/article/details/108469250
require.ensure(["./a"], function (require) {
  var content = require("./a");
  document.open();
  document.write("<h1>" + content + "</h1>");
  document.close();
});
