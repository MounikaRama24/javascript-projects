class Human {
    age=24;
    print =()=>console.log(this.age);
}
class Es7classEx extends Human {
    name="Mounika"
    printInfo1=()=>console.log(this.name)
}
const person=new Es7classEx();
person.printInfo1();
person.print();

