const arr = [1, 2, 3, 4]

//1st way
function doubleCalculate(x){
    return 2*x }
console.log(arr.map(doubleCalculate))

//2nd way
const output = arr.map((y)=>{return y*3})
console.log(output)

//3rd way
const output2 = arr.map(function z(a){
    return a*4
})
console.log(output2)