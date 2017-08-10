function notArrayError(){
  console.log('\x1b[31m%s\x1b[0m','... object is not of type array')
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
    return null
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
    return null
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
    return null
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
    return null
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
    return null
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
    return null
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
    return null
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
    return null
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
    return null
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
    return null
  }
}
