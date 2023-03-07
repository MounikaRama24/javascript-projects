class Human{
    constructor(){
        this.name = "Mounika";
        this.age = 22;
        this.address = "Bangalore";
    }
    printInfo(){
    console.log("Name: " + this.name);
    }
}
class constrctorinheritance extends Human {

    constructor(){
        super();
        this.name = "Sachin";
        this.age = 23;
        this.address = "Delhi";
        }
        printInfo1(){
            console.log("age:"+ this.age)
    }
}

const constrcts =new constrctorinheritance();
constrcts.printInfo();
constrcts.printInfo1();
//person.printInfo();
//person.printInfo1();

