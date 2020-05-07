function coinChange(amt){
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var remainder = 0; 
    
    quarters = Math.floor(amt/25)
    remainder = amt - quarters * 25 
    console.log (remainder)
    
    
    dimes = Math.floor(remainder/10)
    remainder -= dimes * 10 
    console.log (remainder)

    nickels = Math.floor(remainder/5)
    remainder -= nickels * 5
    console.log (remainder)

    pennies = Math.floor(remainder/1)
    remainder -= pennies * 1
    console.log (remainder)

    return console.log(quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, "+ pennies + " pennies")
}

coinChange(312)

