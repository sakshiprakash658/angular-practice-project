function counter(){
    var count = 0;
    return function increasecounter(){
        count++
        console.log(count)
    }
}

var check = counter()
check()
check()

var check2 = counter()
check2()
check2()