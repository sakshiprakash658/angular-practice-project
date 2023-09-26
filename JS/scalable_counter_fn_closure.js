function Counter(){
    var count = 0;
    this.increasecounter =  function(){
        count++
        console.log(count)
    }
    this.decreasecounter =  function(){
        count--
        console.log(count)
    }
}

var check = new Counter()
check.increasecounter()
