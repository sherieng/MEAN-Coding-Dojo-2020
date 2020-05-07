function maxMinAvg(arr){
    var max = 0; 
    var min = 0; 
    var sum = 0; 

    for(var i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i]
    }
    avg = sum/arr.length 
    return console.log("The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + " . ")
}
maxMinAvg([1, -2, 9, 4])