# StarTrek
**startrek** is a Node.js module. This module allows one to insert inspiring StarTrek quotes in their Node.js sites/applications.

It also works with [command-line](#command-line).

To install this package, save it as a dependency in _package.json_ file:
```
npm install startrek --save
```

Require the module in your Node.js application:
```
var startrek = require('startrek');
```

To insert a random quote:
```
console.log(startrek());
// "Live long and prosper..."
```

### Command Line
_startrek_ can be used in the command line.

Install the package globally using npm:
```
npm install startrek -g
```
