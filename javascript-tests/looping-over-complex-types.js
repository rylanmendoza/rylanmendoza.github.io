// Using comments to remember some functions

// divider function
function divider() {
    console.log('')
    console.log('-----------------')
    console.log('-----------------')
    console.log('')
}

// Create an array
const myArray = []; 

const numbers = [1, 2, 3, 5, 7];

console.log(numbers);

console.log('fourth item', numbers[3]);
console.log(numbers[0]);
console.log('length:', numbers.length);
console.log('Number 3:', numbers[numbers.length - 3]);

// adds number to array
numbers.push(25);
console.log(numbers);

// removes last item in array
numbers.pop(); 
console.log(numbers);

divider(); 

// different values within arrays
const cloudy = true
const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

// For loop function
for (let i = 0; i < items.length; i++) {
    //console.log('Value of i:', i);
    console.log('Item:', items[i]);
}    

divider(); 

for (let item of items) {
    console.log('Item:', item);
}

divider();

const files = (["bundle.js", "*.js.map", ".c9"]);

console.log(files.join(', '));

const fileNames = "bundle.js, *.js.map, .c9";

console.log(fileNames.split(','));

divider();

// Create an object
const emptyObject = {};

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
}

console.log('Objects' , emptyObject, smallNumbers);
console.log('Values in our object' , 
    smallNumbers.one, 
    smallNumbers.two, 
    smallNumbers.three,
    smallNumbers['one']
);

divider();

const myObject = {
    five: 5,
    six: 'six'
};

console.log(myObject.five);
console.log(myObject.six);
console.log(myObject.newItem);

myObject.newItem = 'This is a new item'

console.log('Object with new itme' , myObject);

divider();

items.push(myObject);
console.log(items);
