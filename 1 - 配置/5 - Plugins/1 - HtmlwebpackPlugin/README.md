## HTML Webpack Plugin and Open Browser Webpack Plugin ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo08))

This demo shows you how to load 3rd-party plugins.

[html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) could create `index.html` for you, and [open-browser-webpack-plugin](https://github.com/baldore/open-browser-webpack-plugin) could open a new browser tab when Webpack loads.

main.js

```javascript
document.write("<h1>Hello World</h1>");
```

webpack.config.js

```javascript
var HtmlwebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: "Webpack-demos",
      filename: "index.html",
    }),
    new OpenBrowserPlugin({
      url: "http://localhost:8080",
    }),
  ],
};
```

Launch the server.

```bash
$ cd demo08
$ npm run dev
```

Now you don't need to write `index.html` by hand and don't have to open browser by yourself. Webpack did all these things for you.
