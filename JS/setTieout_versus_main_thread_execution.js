console.log('start')

setTimeout(function(){
    console.log("set time out testing")
}, 5000)

console.log('end')

let startDate = new Date().getTime()
let endDate = startDate

while(endDate<startDate+1000){
   endDate = new Date().getTime();
}

console.log('while whole thread runs')