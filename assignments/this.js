/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Refers to the function that is globally available on the window or console scope 

* 2. Implicit Binding: Refers to the this statement being bound to the content of whatever is listed on the left side of the dot.

* 3. New Binding: Refers to a situation where a object is created and returned by the constructor or builder function.

* 4. Explicit Binding: Refers to when the 'this' function is explicitly defined to perform a specified action. 
*

* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName("Roy");


// Principle 2
// code example for Implicit Binding
const myObject = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log (`${this.greeting} my name is ${name}`);
    }
};
myObject.sayHello('Roy');


// Principle 3
// code example for New Binding
function Person(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function () {
        return `Hello, my name is ${this.name}, and I am ${this.age} years old`
    }
}
const roy = new Person({
    name:'Roy',
    age: 28,
})
const bonnie = new Person({
    name:'Bonnie',
    age: 9,
})
console.log (roy.speak());
console.log (bonnie.speak());


// Principle 4
// code example for Explicit Binding
console.log(roy.speak.call(bonnie));
console.log(bonnie.speak.apply(roy));