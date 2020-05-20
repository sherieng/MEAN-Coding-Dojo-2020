// 1
var myString: string;
myString = "Bee stinger";
// myString must be a string and not an int
myString = "9";

//2
function sayHello(name: string) {
    return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
// sayHello function must be a string and not an int
console.log(sayHello("9"));

//3
function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
//add a "?" when the paramater is optional 
console.log(fullName("Jimbo", "Jones"));

//4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
console.log(graduate(christine));
// the attribute belts was "belt" in Jay's object
console.log(graduate(jay));

//5
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// make a new instance of the Ninja class
const shane = new Ninja("Shane", "King");
// make a new instance of the Ninja class
const turing = new Ninja("Alan", "Turing")
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));

//6
var increment = (x: number) => x + 1; //define variable type
console.log(increment(3));
var square = (x: number) => x * x; //define variable type and remove curly braces
console.log(square(4));
var multiply = (x: number, y: number) => { x * y }; //define variable type, include curly braces
var math = (x: number, y: number) => { //define variable types, surround in curly braces
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//7
class Elephant {
    constructor(public age: number) { }
    birthday = () => { //turn function into fat arrow function
        this.age++;

    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
