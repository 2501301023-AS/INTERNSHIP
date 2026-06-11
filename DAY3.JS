// // Q.1 
//  const student={
//     name:"Ram",
//     age:23,
//     city:"panipat"
// }
// console.log(student.name+" "+student.age+" "+student.city);


// Q.2
// const student={
//     name:"Ram",
//     age:23,
//     city:"panipat"
// }
// console.log(student.name);

// Q.3
// Student.prototype.greet=function(){
//         console.log("Hello i am "+this.name);
//     }
// const s1=new Student("Ram",25);
// const s2=new Student("Jatin",25);
// const s3=new Student("Parveen",25);
// s1.greet();
// s2.greet();
// s3.greet();

// Q.4
// class person{
//     set age(value){if(value<0){
//         throw error("invalid age")
//     }
//     this._age=value;
// }}

// Q.5
//  const student = {
//     name: "Ram",
//     age: 23,
//     city: "panipat"
// };
// console.log(Object.keys(student));
//  Q.6
//  const student={
//     name:"Ram",
//     age:23,
//     city:"panipat"

// }
//  console.log(student.keys(student));

// Q.8
// const student={
//     name:"Ram",
//     age:23,
//     city:"panipat"
// sayYourSkills:function(){
//     console.log("Hello my skills are mern stack");
// }
// }

// Q.9
// const user = { name: "Alex", email: "alex@example.com", age: 25 };
// delete user.age;

// console.log(user); 

// Q.10
// const user = {
//   name: "Ram",
//   showName() {
//     console.log(this.name);
//   }
// };


// user.showName(); 

// Q.11 
// const user = {
//   name: "Ram",
  //   showUpperName() {
//     console.log(this.name.toUpperCase());
//   }
// };
// user.showUpperName();

// Q.14 RAM
// Q.15 Undefined
// Q.16 function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Q.17 
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// const s2=new Student("Ramu",25);
// const s3=new Student("Shyam",25);
// console.log(s1);

// Q.18
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
// }

// Q.19 Ram
// Q.20 function Student(name,age){
//     this.name=name;
//     this.age=age
// }
// Student.prototype.greet= function(){
//     console.log("hello");

// Q.21
// function Student(name,age){
//     this.name=name;
//     this.age=age
// }
// Student.prototype.greet= function(){
//     console.log("hello");

// Q.22
// function student(){
    
// }
// const s1=new student();
// console.log(s1.__proto__===student.prototpe);
// Q.23 Hi
// Q.29 class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooooo")
//     }
// }
// const d=new Dog();
// d.bark();
// d.eat();
// Q.30
// class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
    
// }
// const d=new Dog();
// d.eat();
// Q.31 class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooooo")
//     }
// }
// const d=new Dog();
// d.bark();
// d.eat();

// Q.32 Eating

// Q.33
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// console.log(s1);

// Q.36
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// const s2=new Student("Ramu",25);
// const s3=new Student("Shyam",25);
// console.log(s1);

// Q.37 and Q.38 Same as given above
// Q.39
// class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooooo")
//     }
// }
// const d=new Dog();
// d.bark();
// d.eat();
// Q.40
// class Dog {
//   eat() {
//     console.log("Eating...");
//   }
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }

// const d = new Dog();
// d.eat();
// d.bark();