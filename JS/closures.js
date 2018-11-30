function foo(){
    var z = 1;
    var y = function(){ return z };
    return y;
  }
  
  var x = foo();
  x(); // we will get 1