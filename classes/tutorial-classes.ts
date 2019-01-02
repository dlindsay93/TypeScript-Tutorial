class Animal {
  public favFood: string;
//Static variables are shared between every object in a class but don't necessarily describe an atribute of the objects in the class. Such as the number of animals is not a description of the animals unlike color or size.
  static numOfAnimals: number = 0;

  constructor(private name: string, private owner: string){
    //used to update the nume of animals
    Animal.numOfAnimals++;
  }

  ownerInfo(){
    document.write(this.name + " is owned by " +this.owner + "<br />" )
  }

  static howManyAnimals(): number{
    return Animal.numOfAnimals;

  }
  private _weight: number;

  get weight(): number{
    return this._weight;
  }

  set weight(weight: number){
    this._weight = weight;
  }
}

var spot = new Animal("Spot", "Doug");

spot.ownerInfo();
spot.weight = 100;

document.write("Spot's weight is " + spot.weight + " pounds." + "<br />");

document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");

class Dog extends Animal{
  constructor(name: string, owner: string){
    //super calls the Animal's constructor
    super(name, owner)
    Dog.numOfAnimals++;

  }
}

var grover = new Dog("Grover", "Jimmy");

document.write("# of Animals : " +Animal.howManyAnimals() + "<br />");

document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");

document.write("Does Grover have a name : " + ('name' in grover) + "<br />");
