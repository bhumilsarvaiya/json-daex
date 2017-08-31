function notArrayError () {
  throw new Error('object is not of type array')
}

function notObjectError () {
  throw new Error('object type error')
}

module.exports.indexAll = function (a, q) {
  var ix = []
  if (a instanceof Array) {
    for (var i in a) if (q == undefined || this.inObject(a[i], q)) ix.push(parseInt(i))
    return ix
  }
  else notArrayError()
}

module.exports.indexFirst = function (a, q) {
  var ix = null
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix = parseInt(i)
        break
      }
    }
    return ix
  }
  else notArrayError()
}

module.exports.indexFirstN = function (a, n, q) {
  var ix = []
  var f = 0
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix.push(parseInt(i))
        f++
        if (f == n) break
      }
    }
    return ix
  }
  else notArrayError()
}

module.exports.indexLastN = function (a, n, q) {
  var ix = []
  var f = 0
  if (a instanceof Array) {
    for (var i = a.length-1; i>=0; i--) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix.push(parseInt(i))
        f++
        if (f == n) break
      }
    }
    return ix.reverse()
  }
  else notArrayError()
}

module.exports.indexLast = function (a, q) {
  var ix = null
  if (a instanceof Array) {
    for (var i = a.length-1; i>=0; i--) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix = parseInt(i)
        break
      }
    }
    return ix
  }
  else notArrayError()
}

module.exports.getAll = function (a, q) {
  var ix = []
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) ix.push(a[i])
    }
    return ix
  }
  else notArrayError()
}

module.exports.getFirst = function (a, q) {
  var ix = null
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix = a[i]
        break
      }
    }
    return ix
  }
  else notArrayError()
}

module.exports.getFirstN = function (a, n, q) {
  var ix = []
  var f = 0
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix.push(a[i])
        f++
        if (f == n) break
      }
    }
    return ix
  }
  else notArrayError()
}

module.exports.getLastN = function (a, n, q) {
  var ix = []
  var f = 0
  if (a instanceof Array) {
    for (var i = a.length-1; i>=0; i--) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix.push(a[i])
        f++
        if (f == n) break
      }
    }
    return ix.reverse()
  }
  else notArrayError()
}

module.exports.getLast = function (a, q) {
  var ix = null
  if (a instanceof Array) {
    for (var i = a.length-1; i>=0; i--) {
      if (q == undefined || this.inObject(a[i], q)) {
        ix = a[i]
        break
      }
    }
    return ix
  }
  else notArrayError()
}

module.exports.count = function (a, q) {
  var counter = 0
  if (a instanceof Array) {
    for (var i in a) if (q == undefined || this.inObject(a[i], q)) counter++
    return counter
  }
  else notArrayError()
}

module.exports.inArray = function (a, q) {
  if (a instanceof Array) {
    for (var i in a) if (q == undefined || this.inObject(a[i], q)) return true
    return false
  }
  else notArrayError()
}

module.exports.inObject = function (a, q) {
  if (typeof a == 'object' && !(a instanceof Array)) {
    for (k in q) if (a[k] != q[k]) return false
    return true
  }
  else notObjectError()
}

module.exports.except = function (a, q) {
  var ix = []
  if (a instanceof Array) {
    for (var i in a) if (q == undefined || !(this.inObject(a[i], q))) ix.push(a[i])
    return ix
  }
  else notArrayError()
}

module.exports.updateObject = function (a, v, q) {
  if (typeof a == 'object' && !(a instanceof Array)) {
    if (q == undefined || this.inObject(a, q)) for (k in v) a[k] = v[k]
  }
  else notObjectError()
}

module.exports.updateAll = function (a, v, q) {
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) for (k in v) a[i][k] = v[k]
    }
  }
  else notArrayError()
}

module.exports.updateFirst = function (a, v, q) {
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) {
        for(k in v) a[i][k] = v[k]
        break
      }
    }
  }
  else notArrayError()
}

module.exports.updateFirstN = function (a, v, n, q) {
  var f = 0
  if (a instanceof Array) {
    for (var i in a) {
      if (q == undefined || this.inObject(a[i], q)) {
        f++
        for (k in v) a[i][k] = v[k]
        if (f == n) break
      }
    }
  }
  else notArrayError()
}

module.exports.updateLast = function (a, v, q) {
  if (a instanceof Array) {
    for (var i = a.length-1; i>=0; i--){
      if (q == undefined || this.inObject(a[i], q)) {
        for(k in v) a[i][k] = v[k]
        break
      }
    }
  }
  else notArrayError()
}

module.exports.updateLastN = function (a, v, n, q) {
  var f = 0
  if (a instanceof Array) {
    for (var i = a.length-1; i>=0; i--) {
      if (q == undefined || this.inObject(a[i], q)) {
        f++
        for (k in v) a[i][k] = v[k]
        if (f == n) break
      }
    }
  }
  else notArrayError()
}

module.exports.removeAll = function (a, q) {
  if (a instanceof Array) {
    if (q == undefined) a.splice(0,a.length)
    else {
      var t = this.except(a, q)
      a.splice(0, a.length)
      for(var i in t) a.push(t[i])
    }
  }
  else notArrayError()
}

module.exports.removeFirst = function (a, q) {
  if (a instanceof Array) {
    if (q == undefined) a.splice(0, 1)
    else a.splice(this.indexFirst(a, q), 1)
  }
  else notArrayError()
}

module.exports.removeFirstN = function (a, n, q) {
  if (a instanceof Array) {
    n = (n > a.length) ? a.length : n
    if (q == undefined) a.splice(0, n)
    else {
      var t = this.indexFirstN(a, n, q).reverse()
      for (var i in t) a.splice(t[i], 1)
    }
  }
  else notArrayError()
}

module.exports.removeLast = function (a, q) {
  if (a instanceof Array) {
    if (q == undefined) a.splice(a.length - 1, 1)
    else a.splice(this.indexLast(a, q), 1)
  }
  else notArrayError()
}

module.exports.removeLastN = function (a, n, q) {
  if (a instanceof Array) {
    n = (n > a.length) ? a.length : n
    if (q == undefined) a.splice(a.length - n, n)
    else {
      var t = this.indexLastN(a, n, q).reverse()
      for (var i in t) a.splice(t[i], 1)
    }
  }
  else notArrayError()
}

module.exports.removeFields = function (a, f, q) {
  if (a instanceof Array && f instanceof Array) {
    for (var i in a) if (q == undefined || this.inObject(a[i], q)) for (var k in f) delete a[i][f[k]]
  }
  else if (typeof a == 'object' && f instanceof Array) {
    if (q == undefined || this.inObject(a, q)) for (var k in f) delete a[f[k]]
  }
  else notArrayError()
}

module.exports.renameFields = function (a, f, q) {
  if (a instanceof Array) {
    for (var i in a) if (q == undefined || this.inObject(a[i], q)) for (k in f) {
      a[i][f[k]] = a[i][k] ? a[i][k] : null
      delete a[i][k]
    }
  }
  else if (typeof a == 'object') {
    if (q == undefined || this.inObject(a, q)) for (k in f) {
      a[f[k]] = a[k] ? a[k] : null
      delete a[k]
    }
  }
  else notArrayError()
}
