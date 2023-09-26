function a (){
    var x = 10, z = 20;
    return function b(){
       console.log(x)
    }
   }
   
   var check = a();
   check();
   
   // here x and z are in closure but z is not used so it is in garbage collector