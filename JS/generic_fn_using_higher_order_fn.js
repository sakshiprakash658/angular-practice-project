const radius = [1, 2, 3, 4]

const area = function(radius){
    return Math.PI*radius*radius
}

const perimeter = function(radius){
    return Math.PI*radius*2
}

const diameter = function(radius){
    return 2*radius
}

const calculator = function(radius, logic){
    let output = [];
    for(i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculator(radius, area))
// USING map fn
console.log(radius.map(area))