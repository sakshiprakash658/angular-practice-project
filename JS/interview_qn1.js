let arr1 = [1, 2, 3, 4, 5,7]
let arr2 = [1, 4, 9, 16, 28]

function sameArrayCheck(arr1, arr2){
   newArray = []
   for(i=0; i<arr1.length;i++){
    newArray.push(arr1[i]*arr1[i])
   }

   if(newArray.length!==arr2.length){
    return false
   }

   for(i=0;i<arr2.length;i++){
    if(newArray[i]===arr2[i]){
        return 'matched'
    }
    else{
        return 'not found'
    }
   }

}

output = sameArrayCheck(arr1,arr2)
console.log(output)