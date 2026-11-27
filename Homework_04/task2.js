// Task #2

let deliveryStandard = 20;
let deliveryExpress = 35;
let deliveryOvernight = 60;

let deliveryType = prompt(
  "Enter delivery type (standard, express, overnight):",
).toLowerCase();

let deliveryCost;
let massCargo = parseFloat(prompt("Enter mass of cargo in kg:"));

// Calculate delivery cost
switch (deliveryType) {
  case "standard":
    deliveryCost = deliveryStandard * massCargo;
    break;

  case "express":
    deliveryCost = deliveryExpress * massCargo;
    break;

  case "overnight":
    deliveryCost = deliveryOvernight * massCargo;
    break;

  default:
    console.log("Invalid delivery type.");
    break;
}

if (deliveryCost !== undefined) {
  if (massCargo > 20) {
    deliveryCost = deliveryCost * 0.9;
    console.log("10% discount applied.");
  } else if (massCargo > 10) {
    deliveryCost = deliveryCost * 0.95;
    console.log("5% discount applied.");
  }

  if (deliveryType === "overnight") {
    deliveryCost += 150;
    console.log("Additional overnight delivery fee: 150 UAH.");
  }

  console.log(`Final delivery cost: ${deliveryCost} UAH`);
}
