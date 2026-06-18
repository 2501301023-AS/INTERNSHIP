t = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function greet(Ram) {
  await wait(500);
  return `Hello, ${name}`;
}
let result=greet();
console.log(result);