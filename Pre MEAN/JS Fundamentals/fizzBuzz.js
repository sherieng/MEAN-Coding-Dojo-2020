function fizzBuzz(num){
    if(num < 0){
        return console.log("false"); 
    }
    var result = "";
    if(Number.isInteger(num)){
        for(var i=1; i <= num; i++){
            if(i % 3 == 0 && i % 5 != 0){
                result = result + ", " + "Fizz";
            }
            else if(i % 5 == 0 && i % 3 != 0){
                result = result + ", " + "Buzz";
            }
            else if(i % 3 == 0 && i % 5 == 0){
                result = result + ", " + "Fizz Buzz";
            }
            else{ 
                var x = i.toString()
                result = result + ", " + x; 
            }
        }
        return console.log(result)
    }
    else console.log("false for int")
}
fizzBuzz(20)
