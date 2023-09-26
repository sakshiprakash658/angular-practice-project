setTimeout(function(){
    console.log("timer testing")
}, 5000)

function x(y){
    console.log(x);
    y();
}

x(function y(){console.log('y')});



function attachEventListeners(){
let count = 0
document.getElementById('id').addEventListener('click', function(){
    console.log('clicked at: ', count++)
});
}
attachEventListeners();