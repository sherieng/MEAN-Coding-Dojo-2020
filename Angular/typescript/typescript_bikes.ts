class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles: number = 0

    ) { }
    displayInfo = () => {
        console.log(`The bike's price is ${this.price}, maximum speed is ${this.max_speed}, and total miles ${this.miles}.`)
        return this
    }

    ride = () => {
        this.miles += 10
        console.log(`Riding: ${this.miles}.`)
        return this
    }

    reverse = () => {
        this.miles -= 5
        if (this.miles < 0) {
            this.miles = 0
        }
        console.log(`Reversing: ${this.miles}.`)
        return this
    }

}
const bike1 = new Bike(200, "250mph");
bike1.ride().ride().ride().reverse().displayInfo()

const bike2 = new Bike(10, "350mph");
bike2.ride().ride().reverse().reverse().displayInfo()

const bike3 = new Bike(50, "200mph");
bike3.reverse().reverse().reverse().displayInfo()
