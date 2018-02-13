const Elevator = require('./elevator.js');
const Person = require('./person.js')

let myElevator = new Elevator();
let person = new Person('name', 'originFloor', 'destinationFloor');
// myElevator.update()
// myElevator.start()
// myElevator.floorUp()
// myElevator.floorDown()
myElevator.call(person)

