// promise of code excution, whether passed or failed.
//promise object returned has two perperties, STATE & RESULT
//Used for parallel execution
let p = new Promise(function(resolve,reject){
    console.log('Promise is pending')
    setTimeOut(()=>{
        console.log('I am a promise and I am fulfilled')
        reject(new Error('Hey got an errorrr'))
    }, 5000)
})

let q = new Promise(function(resolve,reject){
    console.log('Promise is pending')
    setTimeOut(()=>{
        console.log('I am a promise and I am fulfilled')
        resolve(true)
    }, 5000)
})

q.then((value)=>{
    console.log(value)
})

p.catch((error)=>{
    console.log('some error occured')
})
console.log(q,p)
