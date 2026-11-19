function falsyOrTruthy(elem1, elem2) {
  if (!elem1) {
    return elem1;
  } else {
    return elem2;
  }
}

console.log(falsyOrTruthy(0,5))
console.log(falsyOrTruthy(null, 10))
console.log(falsyOrTruthy(8, 5))

// other way to write the same function using ternary operator
function falsyOrTruthyTernary(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}
console.log(falsyOrTruthyTernary(0,5))
console.log(falsyOrTruthyTernary(null, 10))
console.log(falsyOrTruthyTernary(8, 5))


function arrLength(arr) {
  return arr.length;
}
console.log(arrLength([1, 2, 3]));
console.log(arrLength([5,0,-4,1]))
console.log(arrLength([]))


function lastElem(arr) {
  return arr[arr.length - 1];
}
console.log(lastElem([3, 2, 0,6,2])); // Output: 2
console.log(lastElem(["dog", "cat", "ball"])); // Output: "ball"
console.log(lastElem([null, 5, false])); // Output: false


// this is how you loop every element in an array 
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arrSum([2, 2, 2])); // Output: 6
console.log(arrSum([100, 200, 500])); // Output: 800
console.log(arrSum([0, -5, -10])); // Output: -15


function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }  
  return sum;
}
console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600));


function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  return `${timerMinutes.toString().padStart(2, '0')}:${timerSeconds.toString().padStart(2, '0')}`;
}

console.log(calcTime(66)); // Output: "01:06"
console.log(calcTime(50)); // Output: "00:50"
console.log(calcTime(300)); // Output: "05:00";


function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMax([5, 100, 0])); // Output: 100
console.log(getMax([12, 10, -20])); // Output: 12
console.log(getMax([-300, -100, -200])); // Output: -100


function reverseString(str) {
  let reversed = '';  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("abc")); // Output: "cba"
console.log(reverseString("sandra")); // Output: "ardnas"
console.log(reverseString("this is cool")); // Output: "looc si siht"

// another way to reverse a string
function reverseString2(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString2("abc")); // Output: "cba"
console.log(reverseString2("sandra")); // Output: "ardnas"
console.log(reverseString2("this is cool")); // Output: "looc si siht"


function convertToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  } 
  return arr;
}
console.log(convertToZero([5, 100, 0])); // Output: [0, 0, 0]
console.log(convertToZero([12])); // Output: [0]
console.log(convertToZero([1, 2, 3, 4, 5])); // Output: [0, 0, 0, 0, 0]

// another way to convert all elements in an array to zero 
function convertToZeroForEach(arr) {
  return new Array(arr.length).fill(0);
}
console.log(convertToZeroForEach([5, 100, 0])); // Output: [0, 0, 0]

// another way to convert all elements in an array to zero using map
function convertToZeroMap(arr) {
  return arr.map(elem => 0);
}
console.log(convertToZeroMap([5, 100, 0])); // Output: [0, 0, 0]
console.log(convertToZeroMap([12])); // Output: [0]
console.log(convertToZeroMap([1, 2, 3, 4, 5])); // Output: [0, 0, 0, 0, 0]


function removeApples(arr) {
  return arr.filter(elem => elem !== 'apple');
} 
console.log(removeApples(['banana', 'apple', 'orange', 'apple'])); // Output: ['banana', 'orange']
console.log(removeApples(['Tomatoe', 'Orange', 'Banana'])); // Output: ['Tomatoe', 'Orange', 'Banana']
console.log(removeApples(['apple', 'apple', 'apple'])); // Output: []

// another way to remove all apples from an array
function removeApples(arr) { 
 let noApples = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'apple') {
      noApples.push(arr[i]);
    }
  }
  return noApples;
}
console.log(removeApples(['banana', 'apple', 'orange', 'apple'])); // Output: ['banana', 'orange']
console.log(removeApples(['Tomatoe', 'Orange', 'Banana'])); // Output: ['Tomatoe', 'Orange', 'Banana']
console.log(removeApples(['apple', 'apple', 'apple'])); // Output: []


function filterOutFalsy(arr) {
  return arr.filter(elem => Boolean(elem));
}  

console.log(filterOutFalsy(["", 0, null, undefined, "0"])); // Output: ["0"]
console.log(filterOutFalsy([false, "Tomatoe", "banana", "orange"])); // Output: ["Tomatoe", "banana", "orange"]


function convertToBoolean(arr) {
  return arr.map(elem => Boolean(elem));
} 

console.log(convertToBoolean([500, 0, "Sandra", "", []])); // Output: [true, false, true, false, true]