function bubblesort(arr){
    var count = 0 
    for(var i= 0; i < arr.length; i++){
        for(var j= 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                count = 0
                console.log(arr)
            }  
        }
        if(arr[i-1] < arr[i]){
            count++
            console.log("count " + count)
            if(count == arr.length-1){
                return console.log(arr)
            }
        }
    }
}

bubblesort([1,3,7,6,2,8])


// function printArray(arr){
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// } 
// *** O(n)***

// function findNth(arr, n){
//         console.log(arr[n]);
//     }
// *** O(1)***

// function halving(n){
//         var count = 0;
//         while(n > 1){
//             n = n/2;
//             count++;
//         }
//         return count;
//     }
// *** O(n)***


// function identityMatrix(n){
//     var matrix = [];
//     for(var i=0; i < n; i++){
//         var row = [];
//         for(var j=0; j < n; j++){
//             if(j == i){
//                 row.push(1);
//             }
//             else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }
// *** O(n^2)***


