"use strict";
let id = 5;
let userName = 'Herry';
let active = true;
let x = 'Done';
// ------------------------------------------------------------------------------------------------------
// number array
const ids = [1, 2, 3, 4, 5];
console.log(ids);
// ------------------------------------------------------------------------------------------------------
// array with multiple datatypes
const arr = [101, 'Herry', true];
console.log(arr);
// ------------------------------------------------------------------------------------------------------
//tuple
const person = [121, 'Herry', true];
// not allow 4th element in array && different type of datatype in array
console.log('tuple :', person);
// ------------------------------------------------------------------------------------------------------
//tuple array
let employee;
employee = [
    [1, 'Kevin'],
    [2, 'Savan'],
    [3, 'Raj']
];
console.log('employee :', employee);
// union
let pid;
pid = 'okay';
console.log('Union :', pid);
// ------------------------------------------------------------------------------------------------------
// enum
var Direction;
(function (Direction) {
    Direction["Up"] = "H-Up";
    Direction["Down"] = "H-Down";
    Direction["Left"] = "H-Left";
    Direction["Right"] = "H-Right";
})(Direction || (Direction = {}));
console.log('Enum :', Direction.Right);
// ------------------------------------------------------------------------------------------------------
// object
const user = {
    uid: 1,
    uname: 'Herry'
};
console.log('User :', user);
const newUser = { uid: 25, uname: 'Savan' };
console.log('newUser :', newUser);
// ------------------------------------------------------------------------------------------------------
// type assertions
let cid = '121';
console.log('CId :', cid);
// let customerId = <boolean>cid
// ------------------------------------------------------------------------------------------------------
// function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(10, 15));
function log(message) {
    console.log(message);
}
log('Okay Done ');
const user1 = {
    id: 125,
    name: 'Qaiz'
};
console.log(user1);
// ------------------------------------------------------------------------------------------------------
// class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const kevin = new Person(151, 'Kevin Patel');
console.log('Class Example :', kevin);
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now Registered`;
    }
}
const newData = new Person2(63, 'Jeet Patel');
console.log('method in Class Example :', newData.register());
class Employee2 extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const Emp = new Employee2(510, 'Herry', 'Developer');
console.log('Subclass :', Emp.register());
// ------------------------------------------------------------------------------------------------------
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['H', 'E', 'L', 'L', 'O']);
console.log('numArray', numArray);
console.log('strArray', strArray);
strArray.push('Okay');
console.log('after pushing ele in strArray', strArray);
numArray.push(120);
console.log('after pushing ele in numArray', numArray);
