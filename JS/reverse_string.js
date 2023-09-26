let a = 'passion'
let c = []


for(i=a.length-1;i>=0;i--){
    c.push(a.charAt(i))
}

let d = c.toString().replaceAll(',','')


console.log(d)