// let x = 100;
try {
  let a = 100;
  let b = 0;
  if (b == 0) {
    throw new Error("Division by zero not allowed");
  }
  let result = 100 / 0;
  console.log(result);

  let y = x + 50;
  console.log(y);
} catch (error) {
  console.error(error.message);
}

let a = 5;
let square = a * a;
console.log(square);

// 100 lines of code below
