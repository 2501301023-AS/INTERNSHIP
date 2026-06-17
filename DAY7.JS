// Q.1
// const q= new Promise((res,rej)=>{
//     setTimeout(()=>res("Hello World")
// ,2000)}).then(console.log)
 
// Q.2 
// const q= new Promise((res,rej)=>{
//     setTimeout(()=>rej("server error")
// ,2000)}).catch(console.log)

// Q.3 const q3 = new Promise((resolve, reject) => {
//   Math.random() > 0.5 ? resolve("Success!") : reject(new Error("Failure!"));
// });

// Q.4 const checkAge = (age) => new Promise((resolve, reject) => {
//   age >= 18 ? resolve("Access granted") : reject(new Error("Access denied: Underage"));
// });

// Q.5const validatePassword = (password) => new Promise((resolve, reject) => {
//   password.length >= 8 ? resolve("Password valid") : reject(new Error("Password too short"));
// });

// Q.6
// const validateEmail = (email) => new Promise((resolve, reject) => {
//   email.includes("@") ? resolve("Email valid") : reject(new Error("Invalid email format"));
// });

// Q.7
// const withdraw = (amount, balance) => new Promise((resolve, reject) => {
//   amount <= balance ? resolve(balance - amount) : reject(new Error("Insufficient funds"));
// });

// Q.9
// const getUser = () => new Promise((resolve) => {
//   resolve({ id: 1, name: "Alex", role: "Admin" });
// });
// Q.11
// Promise.resolve(10)
// .then((num)=>{
//     return num*2;
// })
// .then((num)=>{
//     return num*2;
// })
// .then((num)=>{
//     return num*2;
// })
// .then((num)=>{
//     console.log(num);
// })

// Q.12Promise.resolve("Ram")
//   .then(name => name.toUpperCase())
//   .then(name => `${name} MOHAN`)
//   .then(name => `${name} DIXIT`)
//   .then(finalName => console.log(finalName)); 

// Q.13 Promise.resolve(1000)
//   .then(price => price + (price * 0.18)) 
//   .then(price => price - 100)            
//   .then(finalPrice => console.log(`Final Price: ${finalPrice}`));

// Q.16
// Promise.resolve("Pizza")
//   .then(item => ({ item, status: "Preparing" }))
//   .then(order => ({ order, status: "Out for Delivery" }))
//   .then(delivered => console.log(`Order status: ${delivered.status}`));

// Q.20 Promise.resolve(0)
//   .then(v => v + 1).then(v => v + 1).then(v => v + 1)
//   .then(v => v + 1).then(v => v + 1).then(v => v + 1)
//   .then(v => v + 1).then(v => v + 1).then(v => v + 1)
//   .then(v => v + 1)
//   .then(final => console.log(final)); 

// Q.21
// Promise.resolve()
// .then(()=>{
//     console.log("step1")
//     throw new error("booommm")
// })
// .then(()=>{
//     console.log("step 3")
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// Q.22Promise.resolve()
// .then(()=>{
//     console.log("step 1")
// })
// .then(()=>{
//     console.log("step 2")
// }).then(()=>{
//     console.log("step3")
//     throw new error("booommm")
// })

// .catch((err)=>{
//     console.log(err.message);
// })
// .then(()=>{
//     console.log("step 4");
// })

// Q.23
// Promise.resolve()
// .then(()=>{
//     console.log("step 1")
// })// .then(()=>{
//     console.log("step 32)
// }).then(()=>{
//     console.log("step2")
//     throw new error("booommm")
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// Q.26const greetCallback = (name, cb) => cb(null, `Hello ${name}`);

// const greetPromise = (name) => new Promise((resolve, reject) => {
//   greetCallback(name, (err, result) => err ? reject(err) : resolve(result));
// });

// Q.27const calcCallback = (a, b, cb) => cb(null, a + b);

// const calcPromise = (a, b) => new Promise((resolve, reject) => {
//   calcCallback(a, b, (err, result) => err ? reject(err) : resolve(result));
// });

// Q.32 const delay = (ms, val) => new Promise(res => setTimeout(() => res(val), ms));

// Promise.all([delay(500, 1), delay(200, 2), delay(1000, 3), delay(100, 4), delay(300, 5)])
//   .then(results => console.log(results)); 

// Q.33 Promise.all([
//   Promise.resolve("Success 1"),
//   Promise.reject("Immediate Failure!"),
//   Promise.resolve("Success 2")
// ])
//   .then(() => console.log("not resolve"))
//   .catch(err => console.log(`allrej ${err}`));

// Q.35 Promise.allSettled([
//   Promise.resolve("S1"), Promise.reject("F1"), Promise.resolve("S2"), Promise.reject("F2"), Promise.resolve("S3")
// ]).then(results => console.log(results));

// Q.39-A const s1 = new Promise(res => setTimeout(() => res("Server 1 Response"), 5000));
// const s2 = new Promise(res => setTimeout(() => res("Server 2 Response"), 2000));
// const s3 = new Promise(res => setTimeout(() => res("Server 3 Response"), 1000));

// Promise.race([s1, s2, s3]).then(fastest => console.log(`Winner: ${fastest}`)); 

// IQ:->
// Q.1 B 
//     A
// Q.2 A C B
// Q.3 25
// Q.4 ERROR
// Q.5 BOOM
// Q.6 100
// Q.7 A B
// Q.8 1 2 3
// Q.9  FAILED 
// Q.10 START END A B





































