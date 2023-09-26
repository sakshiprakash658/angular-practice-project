// gives highest value because var is contained inside global scope and all iteration are performed in 1 go, value of i remains same
function x(){
    for(var i =1;i<=6;i++){
        setTimeout(function (){
        console.log(i)
        }, i * 1000)
    }
console.log('Understanding Settiomeout and closures.')
}

x();

// gives different value because let is contained inside block loop and with every iteration, value of i changes
function x(){
    for(let i =1;i<=6;i++){
        setTimeout(function (){
        console.log(i)
        }, i * 1000)
    }
console.log('Understanding Settiomeout and closures.')
}

x();

//doing above thing using closures and var

function x(){
    for(let i =1;i<=6;i++){
        function close(y){
        setTimeout(function (){
        console.log(y)
        }, y * 1000)}
        close(i)
    }
console.log('Understanding Settiomeout and closures.')
}

x();