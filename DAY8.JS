// Q.1 
// async function main() {
//     return "Hello World"
    
// }
// console.log(main());

// Q.2 
// async function getuser(){
//     return {name:"Ram",id:1}
// }
// console.log(getuser());

// Q.3
// async function getProducts() {
//   return [
//     { id: 101, name: "Laptop", price: 999 },
//     { id: 102, name: "Mouse", price: 25 }
//   ];
// }
// console.log(getProducts());

// Q.4 
// async function getCurrentDate() {
//   return new Date();
// }
// console.log(getCurrentDate());

// Q.5
// async function getRandomnumber(){
//     return Math.random()*100;
// }
// console.log(getRandomnumber());

// Q.6
// async function getstudentdetail(){
//     return [
//         {id:1,name:"Ram",from:"Panipat"}
//     ]
// }
// console.log(getstudentdetail());

// Q.7 
//  async function getcompanydetail(){
//     return [
//         {Gstin:1,name:"Ram pvt limited",location:"Panipat"}
//     ]
// }
// console.log(getcompanydetail());

// Q.8
// async function getcart(){
//     return[
//         {item:1,name:"Cock",quantity:20},
//         {item:2,name:"Sprite",quantity:10}
//     ]
// }
// console.log(getcart());

// Q.9
// async function gettotla(){
//     return[
//       150

//     ]
    
// }
// console.log(gettotla());

// Q.10
// async function simpleFunction() {
//   return "Test";
// }
// const result = simpleFunction();
// console.log("Is Promise?", result instanceof Promise);

// Q.11
// async function getuser(){
//     return {name:"Ram",From:"Pnp"};}
//     async function user() {
//         const user=await getuser();
//         console.log(user);
//     }
// console.log(getuser());

// Q.12
// async function getproduct(){
//     return {id:1,name:"Laptop",Price:"75000"};
// }
// async function pro(){
//     const product=await getproduct();
//     console.log(product);
// }
// console.log(getproduct());

// Q.13
// async function getorders(){
//     return[ {orderid:10001},{orderid:24554}];
// }
// async function order(){
//     const order=await getorders();
//     console.log(order);
// }
// console.log(getorders());

// Q.14
// async function getpayment(){
//     return[ {payment:500},{payment:2454}];
// }
// async function order(){
//     const order=await getorders();
//     console.log(order);
// }
// console.log(getpayment());

// Q.15 
// const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));
// Q.17
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// async function main(){
//     console.log("1");
//     await wait(2000);
//     console.log("2");
//     await wait(2000);
//     console.log("3");
   

// }
// console.log(main());

// Q.18
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// async function greet(Ram) {
//   await wait(500);
//   return `Hello, ${name}`;
// }
// let result=greet();
// console.log(result);

// Q.19
function wait(ms){return new Promise ((resolve)=> setTimeout(resolve, ms );});}
async function run() {
    const result = await verifyOTP("1234");
    console.log(result); 
}
run();

// Q.20 