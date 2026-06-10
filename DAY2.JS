// Q.1  20
// Q.2  REFERENCE ERROR
// Q.3  function outer(){
//       let count =0;
//       function inner(){
//           count++;
//           console.log(count);
//       }
//      return inner;
//   }
//   const result=outer();
//   result();
//   result();
//   result();
//   result();
// Q.4  let company="Hp";
//   function department(){
//       let dep="Engineering";
//       function team(){
//           let teamName="Frontend"
//           function employee(){
//               let emp="Ram";
//               console.log(company);
//               console.log(dep);
//               console.log(teamName);
//               console.log(emp);
//           }
//           employee();
//       }
//       team();
//   }
//   department();
// Q.5  error
// Q.6// const p="Parent"
    // function child(){
    //     let c="child"
    //     function grandChild(){
    //         let gp="grandchild"
    //         console.log(p);
    //         console.log(c);
    //         console.log(gp);
        
    //     }
    //       grandChild();
    // }
    //    child();
  
    // Q.7  Mohan
    // Q.8  // const p="Parent"
    // function child(){
    //     let c="child"
    //     function grandChild(){
    //         let gp="grandchild"
    //         console.log(p);
    //         console.log(c);
    //         console.log(gp);
        
    //     }
    //       grandChild();
    // }
    //    child();
     
      // Q.9 const c="child"
//     function parent(){
//         let p="parent"
//         console.log(p);
//     }
// parent();
    
    // Q.10
//      function createCounter() {
//     let count = 0; 

//     return {
//         increment() {
//             count++;
//             console.log(count);
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// counter.increment(); 
// counter.increment(); 

// console.log(counter.getCount()); 
// console.log(counter.count); 

// Q.11 function outer(){
//     function outer(){
//       let count =0;
//       function inner(){
//           count++;
//           console.log(count);
//       }
//      return inner;
//   }
//   const result=outer();
//   result();
//   result();
//   result();
// Q.12 function outer(){
//       let count =11;
//       function inner(){
//           count--
//           console.log(count);
//       }
//      return inner;
//   }
//   const result=outer();
//   result();
//   result();
//   result();
// Q.13  let company="Account";
//   function deposit(){
//       let dep="deposite";
//       function withdraw(){
//           let withdraw="withdraw"
//           function checkbal(){
//               let check="Balance";
//               console.log(company);
//               console.log(dep);
//               console.log(withdraw);
//               console.log(check);
//           }
//           checkbal();
//       }
//       withdraw();
//   }
//   deposit();
// Q.14
// function createUser(username) {
//   return function () {
//     return username;
//   };
// }

// const getUsername = createUser("Ali");

// console.log(getUsername()); 
// console.log(getUsername()); 
// Q.15 
// function loginTracker(correct) {
//   let attempts = 0;

//   return (password) => {
//     if (attempts >= 3) return "Account Locked";
//     if (password === correct) return "Login Successful";

//     attempts++;
//     return attempts >= 3 ? "Account Locked" : "Login Failed";
//   };
// }

// const login = loginTracker("1234");
// Q.16
// function createSecret(password) {
//   return function getPassword() {
//     return password;
//   };
// }

// const getPassword = createSecret("mySecret123");

// console.log(getPassword()); 
// Q.18
// function votingMachine() {
//   let votedUsers = [];

//   return function vote(user) {
//     if (votedUsers.includes(user)) {
//       return "Already Voted";
//     }

//     votedUsers.push(user);
//     return "Vote Accepted";
//   };
// }

// const vote = votingMachine();

// console.log(vote("Ali")); 
// console.log(vote("Ali")); 

// Q.21 (function(name){
//     console.log(name);
// })("Welcome to JavaScript");
// Q.22 
// const result=(function(a,b){
//     return (a*b);
// })(10,20)
// console.log(result);
// Q.23
// const result = (() => {
//   return 5 + 3;
// })();

// console.log(result); 
// Q.25
// function calculate(a,b,operation){
//       return operation(a,b);
//   }
      
//   function add(x,y){
//       return x+y;}
//       console.log(calculate(90,70,add));
//   function sub(x,y){
//       return x-y;}
//       console.log(calculate(90,70,sub));
//   function multi(x,y){
//       return x*y;}
//       console.log(calculate(90,70,multi));
//   function div(x,y){
//       return x/y;}
//       console.log(calculate(90,70,div));

// Q.31
// const users = [
// {name:"Ram",age:25},
// {name:"Mohan",age:30},
// {name:"Amit",age:22}
// ];
//  console.log(users.map(a=>a.name));

// Q.31
// const nums=[1,2,3,4,5]
// const result=nums.map(num=>num*2)
//  console.log(result);
// Q.33 
// const products=[
//     {
//         id:1,name:"Mobile",price:15000},
//         {id:2,name:"Pen",price:150},
//        { id:3,name:"Laptop",price:75000},
       
//         ]
//          console.log(products.map(a=>a.name));
    //    Q.34
    
  
    
   


