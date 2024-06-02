# http-status-descriptions

[![npm version](https://badge.fury.io/js/http-status-descriptions.svg)](https://badge.fury.io/js/http-status-descriptions) [![created by](https://img.shields.io/badge/created%20by-M.%20Usman-blue.svg?longCache=true&style=flat-square)](https://github.com/muhammad-usman-108) [![star](https://img.shields.io/github/stars/muhammad-usman-108/http-status-descriptions.svg?style=flat-square)](https://github.com/muhammad-usman-108/http-status-descriptions/stargazers) ![size](https://img.shields.io/github/size/muhammad-usman-108/buymeacoffee.js/dist/main.js?color=green&style=flat-square) ![npm downloads](https://img.shields.io/npm/d18m/http-status-descriptions.svg?color=red&style=flat-square) [![license](https://img.shields.io/github/license/muhammad-usman-108/http-status-descriptions.svg?style=flat-square)](https://github.com/muhammad-usman-108/http-status-descriptions/blob/main/LICENSE)

A npm package that provides human-readable descriptions for HTTP status codes.

## Installation

You can install this package using npm or yarn.

### npm

```npm i http-status-descriptions```

### yarn

```yarn add http-status-descriptions```

## Usage

Here is a simple example to get you started:

```typescript

import { getStatusDescription } from 'http-status-descriptions';

const description = getStatusDescription(200);
console.log(description); 
// Output: OK: The request was successful.

```

## Scripts

### Build

To compile the TypeScript files to JavaScript, run:

```npm run build```

### Test

To run tests, use:

```npm run test```

## Configuration

### TypeScript Configuration

This package uses a `tsconfig.json` file for TypeScript configuration. Here is an example:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
}
```

## Contributing

- [Muhammad Usman](https://github.com/muhammad-usman-108)

## Support

<p><a href="https://buymeacoffee.com/engrmuhammk"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="engrmuhammk" /></a></p><br><br> 

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/http-status-descriptions/blob/main/LICENSE) file for details.

