var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
        drive();
        void {
            document: document, : .write("The car drives with " + this.wheels + " wheels<br />")
        };
    }
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
        drive();
        void {
            document: document, : .write("The bicycle drives with " + this.wheels + " wheels<br />")
        };
    }
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(4);
