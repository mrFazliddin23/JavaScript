/*  Task1   */
let inp1 = document.querySelector("#userName");
let inp2 = document.querySelector("#telegram");
let inp3 = document.querySelector("#number");
console.log(inp1, inp2, inp3);

/*  Task2  */
let number = prompt("Enter any number");
if (Number(number) % 15 == 0) {
    console.log("FizzBuzz")
} else if (Number(number) % 5 == 0) {
    console.log("Fizz");
} else if (Number(number) % 3 == 0) {
    console.log("Buzz");
} else {
    console.log(number);
}