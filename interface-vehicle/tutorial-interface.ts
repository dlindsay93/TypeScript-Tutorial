interface Vehicle {
  drive(): any;
}

class Car implements Vehicle{
  constructor(private wheels: number){

    drive(): void{
      document.write("The car drives with " + this.wheels + " wheels<br />");
    }
  }

  class Bicycle implements Vehicle{
    constructor(private wheels: number){

      drive(): void{
        document.write("The bicycle drives with " + this.wheels + " wheels<br />");
    }
  }

  var car = new Car(4);
  var bike = new Bicycle(4);

//Utilizing generic functions in this example
  function GetWheels<w extends Vehicle>(veh: w): number{
    return veh.drive();
  }

  GetWheels(car);
  GetWheels(bike);
