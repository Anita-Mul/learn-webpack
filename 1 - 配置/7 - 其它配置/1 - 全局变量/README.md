Exposing global variables ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo14))

If you want to use some global variables, and don't want to include them in the Webpack bundle, you can enable `externals` field in `webpack.config.js` ([official document](https://webpack.js.org/configuration/externals/)).

For example, we have a `data.js`.

```javascript
// data.js
var data = "Hello World";
```

index.html

```html
<html>
  <body>
    <script src="data.js"></script>
    <script src="bundle.js"></script>
  </body>
</html>
```

Attention, Webpack will only build `bundle.js`, but not `data.js`.

We can expose `data` as a global variable.

```javascript
// webpack.config.js
module.exports = {
  entry: "./main.jsx",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"],
          },
        },
      },
    ],
  },
  externals: {
    // require('data') is external and available
    //  on the global var data
    data: "data",
  },
};
```

Now, you require `data` as a module variable in your script. but it actually is a global variable.

```javascript
// main.jsx
var data = require("data");
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>{data}</h1>, document.body);
```

You could also put `react` and `react-dom` into `externals`, which will greatly decrease the building time and building size of `bundle.js`.
