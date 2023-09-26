let a = 10
let b = 20

function swap(x,y){
    let temp = 0
    temp = x;
    x = y;
    y = temp;
    console.log('a and b are:',x, y )
}
swap(a,b)