// Task #1
let number = 5476;
let evenSum = 0;
let oddSum = 0;
let evenCount = 0;
let oddCount = 0;

while (number > 0) {
  let digit = number % 10;
  number = Math.trunc(number / 10);
  if (digit % 2 === 0) {
    evenSum += digit;
    evenCount++;
  } else if (digit % 2 !== 0) {
    oddSum += digit;
    oddCount++;
  }
}
console.log(`Count of even digits: ${evenCount}`);
console.log(`Count of odd digits: ${oddCount}`);
console.log(`Sum of even digits: ${evenSum}`);
console.log(`Sum of odd digits: ${oddSum}`);

if (evenSum > oddSum) {
  console.log("Sum of even digits is greater.");
} else if (evenSum === oddSum) {
  console.log("Sum of even digits equals sum of odd digits.");
} else {
  console.log("Sum of odd digits is greater.");
}
