# Installation
```bash
npm install json-daex
```

# About
This project is currently in very early stage. Please feel free to share any idea to make this package better.

# Documentation
+ [click here](https://github.com/bhumilsarvaiya/json-daex/wiki) to see documentation

# Usage Example:

```javascript
var daex = require('json-daex')
var obj = [
  {
    name: 'abc',
    type: 'array',
    age: 20
  },
  {
    name: 'pqr',
    type: 'string',
    age: 20
  },
  {
    name: 'xyz',
    type: 'array',
    age: 22
  },
  {
    name: 'ghi',
    type: 'array',
    age: 20
  },
  {
    name: 'mno',
    type: 'number',
    age: 20
  }
]

var result = daex.indexAll(obj,{'type':'array'})
console.log(result)
//get index of all objects with type: array
// Output: [ 0, 2, 3 ]
```

+ To see other available methods, refer [documentation](https://github.com/bhumilsarvaiya/json-daex/wiki)
