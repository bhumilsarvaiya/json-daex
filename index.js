function notArrayError(){
  throw new Error('object is not of type array')
}

function notObjectError(){
  throw new Error('object type error')
}

module.exports.indexAll = function (a, q){
  var ix = []
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix.push(parseInt(i))
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.indexFirst = function (a, q){
  var ix = null
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix = parseInt(i)
        break
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.indexFirstN = function (a, q, n){
  var ix = []
  var f = 0
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix.push(parseInt(i))
        f++
        if(f == n){
          break
        }
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.indexLastN = function (a, q, n){
  var ix = []
  var f = 0
  if(a instanceof Array){
    for (var i = a.length-1; i>=0; i--){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix.push(parseInt(i))
        f++
        if(f == n){
          break
        }
      }
    }
    return ix.reverse()
  }else{
    notArrayError()
  }
}

module.exports.indexLast = function (a, q){
  var ix = null
  if(a instanceof Array){
    for (var i = a.length-1; i>=0; i--){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix = parseInt(i)
        break
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.getAll = function (a, q){
  var ix = []
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix.push(a[i])
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.getFirst = function (a, q){
  var ix = null
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix = a[i]
        break
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.getFirstN = function (a, q, n){
  var ix = []
  var f = 0
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix.push(a[i])
        f++
        if(f == n){
          break
        }
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.getLastN = function (a, q, n){
  var ix = []
  var f = 0
  if(a instanceof Array){
    for (var i = a.length-1; i>=0; i--){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix.push(a[i])
        f++
        if(f == n){
          break
        }
      }
    }
    return ix.reverse()
  }else{
    notArrayError()
  }
}

module.exports.getLast = function (a, q){
  var ix = null
  if(a instanceof Array){
    for (var i = a.length-1; i>=0; i--){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        ix = a[i]
        break
      }
    }
    return ix
  }else{
    notArrayError()
  }
}

module.exports.count = function (a, q){
  var counter = 0
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        counter++
      }
    }
    return counter
  }else{
    notArrayError()
  }
}

module.exports.inArray = function (a, q){
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          break
        }
      }
      if(b){
        return true
      }
    }
    return false
  }else{
    notArrayError()
  }
}

module.exports.inObject = function (a, q){
  if(typeof a == 'object' && !(a instanceof Array)){
    for(k in q){
      if(a[k]!=q[k]){
        return false
      }
    }
    return true
  }else{
    notObjectError()
  }
}

module.exports.except = function (a, q){
  var ix = []
  if(a instanceof Array){
    for (var i in a){
      var b = true
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false
          ix.push(a[i])
          break
        }
      }
    }
    return ix
  }else{
    notArrayError()
  }
}
