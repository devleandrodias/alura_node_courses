class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }

  emitSound = () => {
    const name = this.name;
    const sound = this.sound;

    console.log(`${name} => ${sound}-${sound}-${sound}`);
  };
}

class Dog extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
  }
}

class Cat extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
  }
}

const rex = new Dog("rex", "brown", "auu");
const sofhia = new Cat("sofhia", "gray", "miau");

rex.emitSound();
sofhia.emitSound();

function printName(typeAnimal) {
  console.log(`Type: ${typeAnimal} - Name: ${this.name}, Sound: ${this.sound}`);
}

function printNameWithOwner(typeAnimal, owner) {
  console.log(
    `Type: ${typeAnimal}, Owner: ${owner} => Name: ${this.name}, Sound: ${this.sound}`
  );
}

const thor = {
  nome: "Thor",
  presentation: function () {
    return `Name: ${this.nome}`;
  },
};

// CALL
printName.call(rex, "DOG");
printName.call(sofhia, "CAT");

// APPLY
printNameWithOwner.apply(rex, [Dog.name, "Leandro"]);
printNameWithOwner.apply(sofhia, [Cat.name, "Thaísa"]);

// BIND
const presentationMethod = thor.presentation;

const thorPresentationNoBind = presentationMethod; // Undefined
const thorPresentationWithBind = presentationMethod.bind(thor); // Thor

console.log(thorPresentationNoBind());
console.log(thorPresentationWithBind());
