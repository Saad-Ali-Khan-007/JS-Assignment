// Create a class named LandVehicle which should have 1 property on it 'wheels' and 2 methods (to get and set the value of that property)
class LandVehicle{
    constructor(wheels){
        this._wheels = wheels
    }
    get getWheels(){
        this._wheels
    }
    set setWheels(wheels){
        this._wheels=wheels
    }
}

// Create a class named Car which should have 3 properties on it (wheels, doors, engineQuality) inherit this class from the LandVehicle class and implement the get and set methods for doors and engineQuality. Also create a 'printSummary' function to print the sumamry about the car
class Car extends LandVehicle{
    constructor(wheels,doors,engineQuality){
        super(wheels)
        this._doors=doors
        this._engineQuality=engineQuality
    }
     getAllFields(wheels,doors,engineQuality){
         this._wheels=wheels
         this._doors=doors
         this._engineQuality=engineQuality
    }
    printSummary(){
        console.log(Car)
    }
}
let a = new Car ("Service","Scissor","A1")
a.getAllFields('local','cashier','5 star')
console.log(a)
a.printSummary()