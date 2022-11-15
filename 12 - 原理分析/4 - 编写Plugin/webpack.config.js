class EndWebpackPlugin {
  constructor(doneCallback, failCallback) {
    // 存下在构造函数中传入的回调函数
    this.doneCallback = doneCallback;
    this.failCallback = failCallback;
  }

  apply(compiler) {
    compiler.plugin("done", (stats) => {
      // 在 done 事件中回调 doneCallback
      this.doneCallback(stats);
    });
    compiler.plugin("failed", (err) => {
      // 在 failed 事件中回调 failCallback
      this.failCallback(err);
    });
  }
}

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  plugins: [
    // 在初始化 EndWebpackPlugin 时传入了两个参数，分别是在成功时的回调函数和失败时的回调函数；
    new EndWebpackPlugin(
      () => {
        // Webpack 构建成功，并且文件输出了后会执行到这里，在这里可以做发布文件操作
        console.log(111111111111);
      },
      (err) => {
        // Webpack 构建失败，err 是导致错误的原因
        console.error(err);
      }
    ),
  ],
};
