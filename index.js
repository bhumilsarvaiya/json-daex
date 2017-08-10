module.exports.indexAll = function (a, q){
  var ix = [];
  if(a instanceof Array){
    for (var i in a){
      var b = true;
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false;
          break;
        }
      }
      if(b){
        ix.push(parseInt(i));
      }
    }
    return ix;
  }else{
    console.log('\x1b[31m%s\x1b[0m','... object is not of type array');
    return null;
  }
}

module.exports.indexFirst = function (a, q){
  var ix;
  if(a instanceof Array){
    for (var i in a){
      var b = true;
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false;
          break;
        }
      }
      if(b){
        ix = parseInt(i);
        break;
      }
    }
    return ix;
  }else{
    console.log('\x1b[31m%s\x1b[0m','... object is not of type array');
    return null;
  }
}

module.exports.indexFirstN = function (a, q, n){
  var ix = [];
  var f = 0;
  if(a instanceof Array){
    for (var i in a){
      var b = true;
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false;
          break;
        }
      }
      if(b){
        ix.push(parseInt(i));
        f++;
        if(f == n){
          break;
        }
      }
    }
    return ix;
  }else{
    console.log('\x1b[31m%s\x1b[0m','... object is not of type array');
    return null;
  }
}

module.exports.indexLastN = function (a, q, n){
  var ix = [];
  var f = 0;
  if(a instanceof Array){
    for (var i = a.length-1; i>=0; i--){
      var b = true;
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false;
          break;
        }
      }
      if(b){
        ix.push(parseInt(i));
        f++;
        if(f == n){
          break;
        }
      }
    }
    return ix.reverse();
  }else{
    console.log('\x1b[31m%s\x1b[0m','... object is not of type array');
    return null;
  }
}

module.exports.indexLast = function (a, q){
  var ix;
  if(a instanceof Array){
    for (var i = a.length-1; i>=0; i--){
      var b = true;
      for(k in q){
        if(a[i][k]!=q[k]){
          b = false;
          break;
        }
      }
      if(b){
        ix = parseInt(i);
        break;
      }
    }
    return ix;
  }else{
    console.log('\x1b[31m%s\x1b[0m','... object is not of type array');
    return null;
  }
}
