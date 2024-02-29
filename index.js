// Declare a variable in global scope called customerName using the var keyword.
var customerName = "bob";

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
  return customerName;
}

// Write a function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = "new value";
}

function getCustomerName() {
  return customerName;
}

// Write a function that overwrites the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = "someone";

// Write a function that unsuccessfully tries to reassign the least favorite customer.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new person"; // This will throw an error
}

// Testing the function
console.log(leastFavoriteCustomer); // 'someone'

// This should throw an error
try {
  changeLeastFavoriteCustomer();
} catch (error) {
  console.log(error instanceof TypeError); // true
}

// Declare bestCustomer variable without assigning a value.
var bestCustomer;

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = "maybe bob"; // Modify the value to 'maybe bob'
}

// Function to get the value of bestCustomer
function getBestCustomer() {
  return bestCustomer;
}

// Testing the functions
setBestCustomer();
console.log(getBestCustomer()); // 'maybe bob'

// Testing the functions
console.log(getCustomerName()); // bob

console.log(getCustomerName()); // 'BOB'

overwriteBestCustomer();
console.log(getBestCustomer()); // 'maybe bob'
console.log(bestCustomer); // new value
