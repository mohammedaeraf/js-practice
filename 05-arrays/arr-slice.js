// The slice() method returns a shallow copy of a portion of an array
// into a new array object, selected from start to end (end not included).
// The original array is not modified.

let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];

// Get a portion of the array from index 2 up to, but not including, index 5
// This will return ["Cherry", "Date", "Elderberry"]
let fruits2 = fruits.slice(2, 5);

console.log(fruits2); // Output: ["Cherry", "Date", "Elderberry"]