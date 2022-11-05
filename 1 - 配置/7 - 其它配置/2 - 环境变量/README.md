## Demo09: Environment flags ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo09))

You can enable some codes only in development environment with environment flags.

main.js

```javascript
document.write("<h1>Hello World</h1>");

if (__DEV__) {
  document.write(new Date());
}
```

index.html

```html
<html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
var webpack = require("webpack");

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false")),
});

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  plugins: [devFlagPlugin],
};
```

Now pass environment variable into webpack. Opening `demo09/package.json`, you should find `scripts` field as following.

```javascript
// package.json
{
  // ...
  "scripts": {
    "dev": "cross-env DEBUG=true webpack-dev-server --open",
  },
  // ...
}
```

Launch the server.

```javascript
$ cd demo09
$ npm run dev
```
