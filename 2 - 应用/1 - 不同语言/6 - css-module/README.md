CSS Module ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo06))

`css-loader?modules` (the query parameter modules) enables the [CSS Module](https://github.com/css-modules/css-modules) which gives a local scoped CSS to your JS module's CSS. You can switch it off with `:global(selector)` ([more info](https://css-modules.github.io/webpack-demo/)).

index.html

```html
<html>
  <body>
    <h1 class="h1">Hello World</h1>
    <h2 class="h2">Hello Webpack</h2>
    <div id="example"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

app.css

```css
/* local scope */
.h1 {
  color: red;
}

/* global scope */
:global(.h2) {
  color: blue;
}
```

main.jsx

```javascript
var React = require("react");
var ReactDOM = require("react-dom");
var style = require("./app.css");

ReactDOM.render(
  <div>
    <h1 className={style.h1}>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.getElementById("example")
);
```

webpack.config.js

```javascript
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
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
```

Launch the server.

```bash
$ cd demo06
$ npm run dev
```

Visiting http://127.0.0.1:8080 , you'll find that only second `h1` is red, because its CSS is local scoped, and both `h2` is blue, because its CSS is global scoped.
