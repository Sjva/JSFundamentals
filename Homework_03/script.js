// Task #1
let a = 17;
let b = 5;

console.log(a + b); // 22
console.log(typeof (a + b)); // "number"

console.log((a - b)); // 12
console.log(typeof (a - b)); // "number"

console.log(a * b); // 85
console.log(typeof (a * b)); // "number"

console.log(a % b); // 2
console.log(typeof (a % b)); // "number"

console.log(a ** b); // 1419857
console.log(typeof (a ** b)); // "number"

// TASK #2
let totalSeconds = 7385;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(`Години: ${hours}, Хвилини: ${minutes}, Секунди: ${seconds}`);

// TASK #3
let startPoints = 100;
let addPointsTask = 50;
let minesErrorPoints = 20;
let bonusPoints = 1;
let violationPoints = 1;

startPoints += 50;
console.log(`Після виконання завдання: ${startPoints}`);

startPoints -= 20;
console.log(`Після помилки: ${startPoints}`);

startPoints *= 2;
console.log(`Проходження рівня: ${startPoints}`);

startPoints /= 2;
console.log(`Підказка: ${startPoints}`);

startPoints++;
console.log(`Бонусне завдання: ${startPoints}`);

startPoints--;
console.log(`Порушення правил: ${startPoints}`);


// TASK #4
let indexNumber = 9007199254740992;
let nextIndexNumber = indexNumber + 1;

console.log(`indexNumber: ${indexNumber}`);
console.log(`nextIndexNumber: ${nextIndexNumber}`);
console.log(`Чи рівні indexNumber та nextIndexNumber? ${indexNumber === nextIndexNumber}`); // true

let indexBigInt = 9007199254740993n;
let nextIndexBigInt = indexBigInt + 1n;
console.log(`indexBigInt: ${indexBigInt}`);
console.log(`nextIndexBigInt: ${nextIndexBigInt}`);
console.log(`Чи рівні indexBigInt та nextIndexBigInt? ${indexBigInt === nextIndexBigInt}`); // false


// TASK #5
let d = 125n;
let e = 4;

console.log(d / BigInt(e)); // 31n
console.log(d % BigInt(e)); // 1n
console.log(d - BigInt(e)); // 121n
console.log(d + BigInt(e)); // 129n          

console.log(e / Number(d)); // 0.032
console.log(e % Number(d)); // 4
console.log(e - Number(d)); // -121
console.log(e + Number(d)); // 129         


// TASK #6
let price = "125.75";
let quantity = "8";
let width = "120px";
let weight = "2.5kg";

let numericPrice = Number(price);
let numericQuantity = parseInt(quantity);
let numericWidth = parseInt(width);
let numericWeight = parseFloat(weight);

let totalPrice = numericPrice * numericQuantity;
console.log(totalPrice);     // 1006

let totalWeight = numericWeight * numericQuantity;
console.log(totalWeight);     // 20

let totalWidth = numericWidth + parseInt(30);
console.log(totalWidth);     // 150

// Перевірка Number.isFinite()
console.log(Number.isFinite(numericPrice));    // true
console.log(Number.isFinite(numericQuantity)); // true
console.log(Number.isFinite(numericWidth));    // true
console.log(Number.isFinite(numericWeight));   // true

// Перевірка Number.isInteger()
console.log(Number.isInteger(numericPrice));    // false
console.log(Number.isInteger(numericQuantity)); // true
console.log(Number.isInteger(numericWidth));    // true
console.log(Number.isInteger(numericWeight));   // false