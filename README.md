# Installation
```bash
npm install json-daex -s
```

# About
This project is currently in very early stage. Please feel free to share any idea to make this package better.

Currently, you will be able to get index of objects from a JSON array based on the query passed.

# Currently supported functions and query:

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

console.log(daex.indexAll(obj,{'type':'array'}))
//get index of all objects with type: array

console.log(daex.indexAll(obj,{'type':'array','age':20}))
//get index of all objects with type: array and age: 20

console.log(daex.indexFirst(obj,{'type':'array'}))
//get index of first object with type: array

console.log(daex.indexLast(obj,{'type':'array'}))
//get index of last object with type: array

console.log(daex.indexFirstN(obj,{'type':'array'},2))
//get index of first 2 objects with type: array

console.log(daex.indexLastN(obj,{'type':'array'},2))
//get index of last 2 objects with type: array

// Output:
// [ 0, 2, 3 ]
// [ 0 , 3 ]
// 3
// 0
// [ 0, 2, 3 ]
// [ 0, 2, 3 ]
```
