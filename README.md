# Installation
```bash
npm install json-daex -s
```

# About
This project is currently in very early stage. Please feel free to share any idea to make this package better.

Currently, you will be able to get index of objects or objects from a JSON array based on the query passed.

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
// Output: [ 0, 2, 3 ]

console.log(daex.indexAll(obj,{'type':'array','age':20}))
//get index of all objects with type: array and age: 20
// Output: [ 0 , 3 ]

console.log(daex.indexFirst(obj,{'type':'array'}))
//get index of first object with type: array
// Output: 0

console.log(daex.indexLast(obj,{'type':'array'}))
//get index of last object with type: array
// Output: 3

console.log(daex.indexFirstN(obj,{'type':'array'},2))
//get index of first 2 objects with type: array
// Output: [ 0, 2 ]

console.log(daex.indexLastN(obj,{'type':'array'},2))
//get index of last 2 objects with type: array
// Output: [ 2, 3 ]

console.log(daex.getAll(obj,{'type':'array'}))
//get all objects with type: array
// Output: [ { name: 'abc', type: 'array', age: 20 },
//           { name: 'xyz', type: 'array', age: 22 },
//           { name: 'ghi', type: 'array', age: 20 } ]

console.log(daex.getAll(obj,{'type':'array','age':20}))
//get all objects with type: array and age: 20
// Output: [ { name: 'abc', type: 'array', age: 20 },
//           { name: 'ghi', type: 'array', age: 20 } ]

console.log(daex.getFirst(obj,{'type':'array'}))
//get first object with type: array
// Output: { name: 'abc', type: 'array', age: 20 }

console.log(daex.getLast(obj,{'type':'array'}))
//get last object with type: array
// Output: { name: 'ghi', type: 'array', age: 20 }

console.log(daex.getFirstN(obj,{'type':'array'},2))
//get first 2 objects with type: array
// Output: [ { name: 'abc', type: 'array', age: 20 },
//           { name: 'xyz', type: 'array', age: 22 } ]

console.log(daex.getLastN(obj,{'type':'array'},2))
//get last 2 objects with type: array
// Output: [ { name: 'xyz', type: 'array', age: 22 },
//           { name: 'ghi', type: 'array', age: 20 } ]

console.log(daex.count(obj,{'type':'array'}))
//count objects with type: array
// Output: 3

console.log(daex.inArray(obj,{'type':'array'}))
//check if there exists any object with type: array
// Output: true

console.log(daex.inObject(obj[1],{'type':'array'}))
//check if there exists type: array (key-value pair) in object
// Output: true

console.log(daex.except(obj,{'type':'array'}))
//returns all objects which do not have type: array
// Output: [ { name: 'pqr', type: 'string', age: 20 },
//           { name: 'mno', type: 'number', age: 20 } ]
```
