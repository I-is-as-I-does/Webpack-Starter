# Webpack Starter

mini read me

## Init

When inside project folder:

```bash
npm init -y
npm install webpack webpack-cli --save-dev
```

`-y` skip guided `package.json` creation

## Dependencies

### Install package

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

## Build

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

Compiled .js file to be found in `dist/`.

## Files

### Structure

```txt
project-folder  
  |- webpack.config.js  
  |- package.json  
 |- /dist  
    |- index.html (optional)
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
    "webpack-cli": "^4.9.1"
  },
  "dependencies": {}
}
```

### webpack.config.js

```javascript
const path = require('path');

module.exports = {
   mode: 'development', //chande to production when needed
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

### src/index.js

example:

```javascript
import Something from 'somethingPackage';

function component() {
    const element = document.createElement('div');
    element.innerHTML = Something.someMethod("bob");  
    return element;
  }
  
  document.body.appendChild(component());
```

### dist/index.html

Exemple of how to call compiled main.js in an html file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

That's it.

## More

<https://webpack.js.org/guides/getting-started/>
