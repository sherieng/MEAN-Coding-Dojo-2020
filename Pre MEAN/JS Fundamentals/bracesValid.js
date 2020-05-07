function bracesValid(str){
    var arr = []; 
    
    for(var i=0; i<str.length; i++){
        if (str[i] == ("{") || str[i]== ("(") || str[i] == ("[")){
            arr.push(str[i])
            console.log (arr);
        }
        else{
            if (str[i] == "}" && arr[arr.length-1] == "{"){
                arr.pop(arr[i])
                console.log (arr);
            }
            else if (str[i] == "]" && arr[arr.length-1] == "["){
                arr.pop(arr[i])
                console.log (arr);
            }
            
            else if(str[i] == ")" && arr[arr.length-1] == "("){
                arr.pop(arr[i])
                console.log (arr);
            }

            else{
                break; 
            }
        }
    }
    if (arr.length > 0){
        return console.log ("false");
    }
    else{
        return console.log ("true");
    }
}


bracesValid("{(})")
bracesValid("{{()}}[]")
