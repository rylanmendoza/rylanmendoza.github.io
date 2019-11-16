var person = {
    firstName: "Rylan",
    lastName: "Mendoza",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

divider('Person');

console.log('First name:', person.firstName);
console.log('Last name: ' , person.lastName);
console.log('Full name: ' , person.fullName());

var calculator = {
    operand01: -1,
    operand02: -1,
    addName: function(operand01,operand02) {
        return this.operand01 + this.operand02;
        },
    subtractName: function(operand01,operand02) {
        return this.operand01 - this.operand02;
    },
};

calculator.multiply = function(operand01,operand02) {
    return this.operand01 * this.operand02;
    }

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

divider('Calculator');
console.log('operand01 is the length of the first name =', calculator.operand01);
console.log('operand02 is the length of the last name =', calculator.operand02);
console.log('The length of both first and last name added =', calculator.addName());
console.log('The length of the first name subtracted by the length of the last name =', calculator.subtractName());
console.log('The length of both first and last names multiplied =', calculator.multiply());
