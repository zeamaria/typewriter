
// console.log will add a new line character (\n) to the end of the string. 
// in Node we can use 


const sentence = "hello there from lighthouse labs";
let time = 50
for (const char of sentence) {
  console.log("this is the value of time:", time)
  setTimeout(() => process.stdout.write(char),time += 50)
}; // <= 1s delay to make it noticeable. Can dial it down later.

