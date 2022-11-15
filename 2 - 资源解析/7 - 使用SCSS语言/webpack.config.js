const path = require("path");

// http://webpack.wuhaolin.cn/3%E5%AE%9E%E6%88%98/3-4%E4%BD%BF%E7%94%A8SCSS%E8%AF%AD%E8%A8%80.html
module.exports = {
  // JS 执行入口文件
  entry: "./main.js",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss/, // 增加对 SCSS 文件的支持
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
