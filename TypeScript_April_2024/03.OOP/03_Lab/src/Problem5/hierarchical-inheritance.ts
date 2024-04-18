class Animal {
  eat() {
    console.log("eating…");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }

  bark() {
    console.log("barking...");
  }
}

class Cat extends Animal {
    
    constructor() {
        super();
    }

    meow() {
        console.log('meowing...');
        
    }
}

const dog = new Dog();
dog.bark();

const cat = new Cat();
cat.meow();
