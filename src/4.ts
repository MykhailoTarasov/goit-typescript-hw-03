class Key {
    private signature: number = Math.random();
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    constructor(private key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];
  
    constructor(door: boolean, key: Key) {
      this.door = door;
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log("Welcome home!");
      } else {
        console.log("The door is closed. Can't come in.");
      }
    }
  
    abstract openDoor(enteredKey: Key): void;
  }
  
  class MyHouse extends House {
  
    openDoor(enteredKey: Key): void {
      if (enteredKey.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("The door is now open!");
      } else {
        console.log("Wrong key. The door remains closed.");
      }
    }
  }
  
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);


export {};