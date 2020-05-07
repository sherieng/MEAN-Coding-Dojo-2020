// function binarySearch(arr, num, left = 0, right = arr.length){
//     var diff = right-left 
//     for(i=left; i<right; i++){
//         if(num == arr[Math.floor(right/2)]){
//             return console.log(Math.floor(right/2))
//         }
//         else if(num < arr[Math.floor(right/2)]){
//             right = Math.floor((diff)/2)
//             if((diff) == 1){
//                 return console.log("value not in array")
//             }
//             binarySearch(arr,num, left, right)
//         }
//         else if(num > arr[Math.floor(right/2)]){
//             left = Math.floor((diff)/2) + left 
//             if(diff == 1){
//                 return console.log("value not in array")
//             }
//             binarySearch(arr,num,left, right)
//         }
        
//     }
// }


function binarySearch(arr, num, left = 0, right = arr.length){
    for(i= left; i<right; i=left){
        if(num == arr[Math.floor(right/2)]){
            return console.log(Math.floor(right/2))
        }
        else if(num < arr[Math.floor(right/2)]){
            right = Math.floor((right-left)/2)
            if(right-left == 1){
                return console.log("value not in array")
            }
        }
        else if(num > arr[Math.floor(right/2)]){
            left = Math.floor((right-left)/2 + left)
            if(right-left == 1){
                return console.log("value not in array")
            }
        }
        
    }
}

binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93)
binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)