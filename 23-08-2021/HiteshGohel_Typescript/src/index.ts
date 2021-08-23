let id: number = 5
let userName: string = 'Herry'
let active: boolean = true
let x: any = 'Done'

// ------------------------------------------------------------------------------------------------------
// number array
const ids: number[] = [1, 2, 3, 4, 5]
console.log(ids)

// ------------------------------------------------------------------------------------------------------
// array with multiple datatypes
const arr: any[] = [101, 'Herry', true]
console.log(arr)

// ------------------------------------------------------------------------------------------------------
//tuple
const person: [number, string, boolean] = [121, 'Herry', true]
// not allow 4th element in array && different type of datatype in array
console.log('tuple :', person)

// ------------------------------------------------------------------------------------------------------
//tuple array
let employee: [number, string][]
employee = [
  [1, 'Kevin'],
  [2, 'Savan'],
  [3, 'Raj']
]
console.log('employee :', employee)

// union
let pid: string | number
pid = 'okay'
console.log('Union :', pid)

// ------------------------------------------------------------------------------------------------------
// enum
enum Direction {
  Up = 'H-Up',
  Down = 'H-Down',
  Left = 'H-Left',
  Right = 'H-Right'
}
console.log('Enum :', Direction.Right)

// ------------------------------------------------------------------------------------------------------
// object
const user: { uid: number; uname: string } = {
  uid: 1,
  uname: 'Herry'
}
console.log('User :', user)

type newUser = { uid: number; uname: string }
const newUser: newUser = { uid: 25, uname: 'Savan' }
console.log('newUser :', newUser)

// ------------------------------------------------------------------------------------------------------
// type assertions
let cid: any = '121'
console.log('CId :', cid)
// let customerId = <boolean>cid

// ------------------------------------------------------------------------------------------------------
// function
function addNum (x: number, y: number): number {
  return x + y
}
console.log(addNum(10, 15))

function log (message: string | number): void {
  console.log(message)
}
log('Okay Done ')

// ------------------------------------------------------------------------------------------------------
// interface
interface UserInterface {
  id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 125,
  name: 'Qaiz'
}
console.log(user1)

// ------------------------------------------------------------------------------------------------------
// class
class Person {
  id: number
  name: string

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }
}

const kevin = new Person(151, 'Kevin Patel')
console.log('Class Example :', kevin)

// ------------------------------------------------------------------------------------------------------
// interface and inheritance if class
interface personInterface {
  id: number
  name: string
  register(): string
}

class Person2 implements personInterface {
  id: number
  name: string

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }

  register () {
    return `${this.name} is now Registered`
  }
}

const newData = new Person2(63, 'Jeet Patel')
console.log('method in Class Example :', newData.register())

class Employee2 extends Person2 {
  position: string

  constructor (id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const Emp = new Employee2(510, 'Herry', 'Developer')
console.log('Subclass :', Emp.register())

// ------------------------------------------------------------------------------------------------------

// generics
function getArray<T> (items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['H', 'E', 'L', 'L', 'O'])

console.log('numArray', numArray)
console.log('strArray', strArray)

strArray.push('Okay')
console.log('after pushing ele in strArray', strArray)

numArray.push(120)
console.log('after pushing ele in numArray', numArray)
