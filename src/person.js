class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello(){
     return "Hello, my name is " + person.name +". " + "I am " + 
     person.age +" "+ "years old." + " My interests are" +" "+ person.interests;

    }
}

let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives'] );
let greeting = person.hello();
console.log(greeting);
