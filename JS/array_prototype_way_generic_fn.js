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

Array.prototype.calculator = function(logic){
    let output = [];
    for(i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculator(radius, area))
