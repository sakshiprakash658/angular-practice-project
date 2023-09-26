function outer(){
    var i = 10;
    function inner(){
        console.log(i)
    }
    return inner
}
outer()();


function outmost(){
    var c = 20;   
    function outer(b){
       b=10
       function inner(){
           console.log(b, c)
       }
       let i = 10;
       return inner
    }
    return outer
   }
   var close = outmost()()
   var check = outmost()(30)
   close();
   check();
   


   function outmost(){
    var c = 20;   
    function outer(b){
       b=10
       function inner(){
           console.log(b, c)
       }
       let i = 10;
       return inner
    }
    return outer
   }
   let i = 100
   var close = outmost()()
   var check = outmost()(30)
   close();
   check();
   