# Webpack Starter

mini read me

## Init

When inside project folder:

```bash
npm install
```

This starter dependencies listed in `package.json` will be installed.

Edit `const license` in `webpack.config.js`
Edit `name` and `license` in `package.json`

## Package

### Install

> When installing a package that will be bundled into your production bundle, you should use `npm install --save`. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use `npm install --save-dev`.  

ex. :

```bash
npm install --save lodash
```

### Import

Import dependency using JS import in `src/` file(s)
ex. :

```javascript
import _ from 'lodash';
```

### Build project

```bash
npm run build
```

or

```bash
npx webpack
```

or

```bash
npx webpack --config webpack.custom-name.config.js
```

Compiled files will be in `dist/`.

## Files

### Structure

```txt
project-folder  
  |- webpack.config.js  
  |- package.json  
 |- /dist  
    |- /css  
     |- /main.css  
    |- /js  
     |- /main.js   
   |- index.html
 |- /src  
  |- index.js
```

### package.json

```json
{
  "name": "project-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "description": "",
  "devDependencies": {
    "webpack": "^5.61.0",
    "webpack-cli": "^4.9.1",
    "css-loader": "^6.5.0",
    "mini-css-extract-plugin": "^2.4.3",
    "banner-plugin": "^1.0.10"
  },
  "dependencies": {}
}
```

### webpack.config.js

```javascript
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const license = 'This file is part of *** | (c) 2021 I-is-as-I-does | MIT license'; //edit

module.exports = {
    mode: 'development', //chande to production when ready
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename:"css/main.css"}),
    new webpack.BannerPlugin({
      banner: license,
    })
],
};
```

### src/index.js

example:

```javascript
import "./style.css";
import Something from 'somethingPackage';

function component() {
    const element = document.createElement('div');
    element.innerHTML = Something.someMethod("bob");  
    return element;
  }
  
  document.body.appendChild(component());
```

### dist/index.html

Exemple of how to call compiled main.js and main.css in an html file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <script defer src="main.js"></script>
  <link href="main.css" rel="stylesheet">
</head>
  <body>

  </body>
</html>
```

## Compiling Html

look into `HtmlWebpackPlugin`
<https://webpack.js.org/plugins/html-webpack-plugin/>

## More

- Getting started
<https://webpack.js.org/guides/getting-started/>

- Css plugin options
<https://webpack.js.org/plugins/mini-css-extract-plugin/>

- Banner plugin options
<https://webpack.js.org/plugins/banner-plugin/>
  
- Other useful plugins
<https://webpack.js.org/plugins/>
