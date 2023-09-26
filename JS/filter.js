const arr = [1, 2, 4, 7, 8, 9]

function isOdd(x){
    return x%2 ;
}
function isEven(x){
    return x%2===0 ;
}
const output1 = arr.filter(isOdd);
const output2 = arr.filter(isEven);
console.log(output1)
console.log(output2)