'use strict'

const diapason = (n, step = 0) => Array.from({ length: n }, (_, i) => i + step)

function getPrimeNumbers(n) {
  const diapason = Array.from({ length: n }, (_, i) => i + 1).slice(1)
  const store = []

  for (let i = 0; i < diapason.length; i++) {
    if (!diapason[i]) continue

    for (let j = diapason[i]; diapason[i] * j <= n; j++) {
      diapason[i + (diapason[i] * (j - 1))] = null
    }

    store.push(diapason[i])
  }

  return store
}


// console.log(getPrimeNumbers(30))


function getPrimeNumbers2(n) {
  const a = []
  const b = []

  for (let i = 2; i ** 2 <= n; i++) {
    if (!a[i]) {
      b.push(i)

      for (let j = i ** 2; j <= n; j += i) {
        a[j] = true
      }
    }
  }

  return b
}

// console.log(getPrimeNumbers2(30))


let calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a
    this.b = b
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
};

// calculator.read(3, 4);
// console.log( calculator.sum() );
// console.log( calculator.mul() );


function Calculator() {
  this.read = function(a, b) {
    this.a = a
    this.b = b
  }
  this.sum = function() {
    return this.a + this.b
  }
  this.mul = function() {
    return this.a * this.b
  }
}

// let calculator = new Calculator();
// calculator.read(3, 4);
// console.log( calculator.sum() );
// console.log( calculator.mul() );


function Accumulator(a) {
  this.value = a

  this.read = function(n) {
    this.value += n
  }
}

// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(2); // прибавит ввод prompt к текущему значению
// accumulator.read(5); // прибавит ввод prompt к текущему значению
//
// console.log(accumulator.value);


function getMaxSubSum(arr) {
  let max = 0
  let sum = 0

  for (const i of arr) {
    sum += i
    max = sum > max ? sum : max
    sum = sum < 0 ? 0 : sum
  }

  // for (const i of arr) {
  //   sum -= i
  //   max = sum > max ? sum : max
  // }

  return max
}


// console.log(getMaxSubSum([-1, 2, 3, -9]))
// console.log(getMaxSubSum([2, -1, 2, 3, -9]))
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
// console.log(getMaxSubSum([-2, -1, 1, 2]))
// console.log(getMaxSubSum([100, -9, 2, -3, 5]))
// console.log(getMaxSubSum([1, 2, 3]))
// console.log(getMaxSubSum([-1, -2, -3]))

// const a = {
//   0: "что-то",
//   1: "ещё",
//   2: "?",
// }
//
// const b = [1, 3, 4]
//
// Object.defineProperties(a, {
//   length: {
//     get() {
//       return Object.keys(this).length
//     }
//   },
//   [Symbol.isConcatSpreadable]: {
//     get() {
//       return true
//     }
//   },
// })
//
// console.log(b.concat(a))
// console.log(a)
//
// for (const i in a) {
//   console.log(i)
// }


function camelize(value) {
  return value.split('-').reduce((a, b, index) => {
    return a + (index > 0 ? b[0].toUpperCase() + b.slice(1) : b)
  }, '')
}

// console.log(camelize("background-color")) // 'backgroundColor';
// console.log(camelize("list-style-image")) // 'listStyleImage';
// console.log(camelize("-webkit-transition")) // 'WebkitTransition';


function filterRange(arr, start, end) {
  return arr.filter(item => item >= start && item <= end)
}

// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4))

function filterRangeInPlace(arr, start, end) {
  arr.forEach((item, index) => {
    if (item < start || item > end) {
      arr.splice(index, 1)
    }
  })
}
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4)
// console.log(arr)


function Calculator2() {
  this.store = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }

  this.addMethod = function (op, fn) {
    this.store[op] = fn
  }

  this.calculate = function (val) {
    const [operand1, operator, operand2] = val.split(' ')
    return this.store[operator](operand1, operand2)
  }
}

// let powerCalc = new Calculator2;
//
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("2 ** 3");
// console.log(result)
// console.log(powerCalc)


function shuffle(arr) {
  const min1 = 0
  const max1 = Math.floor(arr.length / 2)
  let rand1 = Math.floor(min1 + (Math.random() * (max1 - min1)))
  const min2 = max1
  const max2 = arr.length
  let rand2 = Math.floor(min2 + (Math.random() * (max2 - min2)))
  const a = arr.splice(rand1, 1, arr[rand2])
  arr.splice(rand2, 1, a[0])
}


// /* Тасование Фишера — Йетса.
//    Суть заключается в том,
//    чтобы проходить по массиву в обратном порядке и менять местами каждый элемент со случайным элементом,
//    который находится перед ним.
//  */
function shuffle2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// const arr = [1, 2, 3, 4]
// shuffle2(arr)
// console.log(arr)



function unique(arr) {
  /* ваш код */
  const result = []

  for (const i of arr) {
    if (!result.includes(i)) {
      result.push(i)
    }
  }

  return result
}

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log(unique(strings))

// const store1 = []
// const store2 = []
//
// for (let x of diapason(155)) {
//   if (x <= 100) {
//     store1.push(x)
//   }
//
//   if (!(x > 100)) {
//     store2.push(x)
//   }
// }
//
// console.log(store1, store2)


function aClean(arr) {
  const store = [arr[0]]

  debugger
  for (const item of arr) {
    for (const el of store) {
      const a = []

      for (const char of item) {
        a.push(el.includes(char))
      }

      if (a.some(x => !x)) {
        store.push(item)
      }
    }
  }

  return store
}

function aClean2(arr) {
  const store = new Map()

  for (const item of arr) {
    let a = item.toLowerCase()
      .split('')
      .sort()
      .join('')

    if (!store.get(a)) {
      store.set(a, item)
    }
  }

  return Array.from(store.values())
}
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log( aClean(arr) )



function topSalary(salaries) {
  let el = null

  for (const [key, val] of Object.entries(salaries)) {
    if (!el || el.val < val) el = { key, val }
  }

  return el?.key
}

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "Mark": 2250,
// };

// console.log( topSalary(salaries) )


// let room = {
//   number: 23
// };
//
// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
//
// console.log(JSON.stringify(meetup,  (key, value) => (key !== "" && value === meetup) ? undefined : value))


// todo на LinkedList
// class Queue {}


class Stack {
  constructor(val = []) {
    this.__store = val
  }

  pop() {
    return this.__store.pop()
  }

  push(val) {
    this.__store.push(val)
  }

  size() {
    return this.__store.length
  }

  peek(ind) {
    return this.__store[ind]
  }

  isEmpty() {
    return this.__store.length === 0
  }

  entries() {
    return this.__store.entries()
  }

  toString() {
    return this.__store.toString()
  }
}

const getReversedBracket = (val) => ({
    '[': ']',
    '(': ')',
    '{': '}',
    '}': '{',
    ')': '(',
    ']': '[',
  }[val] || -1)

const isLeftBracket = val => ['[', '(', '{'].includes(val)

function checkBrackets(brackets) {
  const stack = new Stack()
  debugger

  for (const bracket of brackets) {
    const rev = getReversedBracket(bracket)

    if (isLeftBracket(bracket)) {
      stack.push(bracket)
    } else if (stack.isEmpty() || stack.pop() !== rev) {
      return false
    }
  }

  return stack.isEmpty()
}


// const a = '[{}()'
//
// console.log(checkBrackets(a))


function sumTo(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }

  return sum
}

function sumTo2(n) {
  if (n < 1) {
    return n
  }
  return n + sumTo2(n-1)
}

function sumTo3(n) {
  return n * (n + 1) / 2;
}

// console.log( sumTo(100) )


function factorial(n) {
  if (n === 1) return n
  return n * factorial(n-1)
}

// console.log(factorial(5))


const map = new Map()

function fib(n) {
  if (n <= 1) return n

  if (!map.has(n)) {
    const a = fib(n - 1) + fib(n - 2)
    map.set(n, a)
    return a
  }
  return map.get(n)
}

// console.log(fib(3))
// console.log(fib(7))
// console.log(fib(77))

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp);
    tmp = tmp.next;
  }
}

function printList2(list) {
  if (list) {
    console.log(list)
    printList2(list.next)
  }
}

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// printList(list);


// function f(...args) {
//   console.log(args)
// }
//
// f(...[1, 2, 4])



function inBetween(start, end) {
  return function (item) {
    return item >= start && item <= end
  }
}

function inArray(arr) {
  return function (item) {
    return arr.includes(item)
  }
}


// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}


// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('name'));
// console.log(users)
// users.sort(byField('age'));
// console.log(users)


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let b = i
    let shooter = function() { // функция shooter

      console.log( b ); // должна выводить порядковый номер
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}
//
// let army = makeArmy();
//
// army[0]();
// army[5]();


function makeCounter() {
  let count = 0;

  f.decrease = function() {
    return count--
  }

  f.set = function(val) {
    count = val
  }

  function f() {
    return count++
  }

  return f
}

// let _ = makeCounter();
//
// console.log( _() ); // 0
// console.log( _() ); // 1
//
// _.set(10); // установить новое значение счётчика
//
// console.log( _() ); // 10
//
// _.decrease(); // уменьшить значение счётчика на 1
//
// console.log( _() ); // 10 (вместо 11)


function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

// console.log( sum(1)(2) ); // 3
// console.log( sum(5)(-1)(2) ); // 6
// console.log( sum(6)(-1)(-2)(-3) ); // 0
// console.log( sum(0)(1)(2)(3)(4)(5) ); // 15


function printNumbers(from, to) {

  const tId = setTimeout(function func() {
    console.log(from++)

    if (from <= to) {
      setTimeout(func, 1000)
    } else {
      clearTimeout(tId)
    }
  })
}

// printNumbers(1, 10)


function tuple(fields) {
  const __tuple = {}

  for (const field of fields) {
    __tuple[field] = null
  }

  return function (args) {
    for (const [key, val] of Object.entries(args)) {
      if (key in __tuple) {
        __tuple[key] = val
      }
    }

    return Object.freeze(__tuple)
  }
}

// const a = tuple( ['id', 'name'])
//
// const b = a({ id: 1, name: 'bob'})


// const a = {
//   d() {
//     console.log('444')
//   },
//   f() {
//     this.d()
//     console.log('fffff')
//   }
// }
//
// const b = a.f
// b.call(a)
// console.log(this)


function work(a, b) {
  return a + b
}

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


function delay(func, delay) {
  return function (...args) {
    setTimeout(() => func.apply(this, args), delay)
  }
}

function f(x) {
  console.log(x);
}

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
//
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс


function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };
}

// let log = '';
// function f(a) {
//   log += a;
// }
// f = debounce(f, 1000);
// f(1); // вызвана
// f(2); // проигнорирована
// setTimeout(() => f(3), 100);  // проигнорирована (слишком рано)
// setTimeout(() => f(4), 1100); // вызвана (1000 мс истекли)
// setTimeout(() => f(5), 1500); // проигнорирована (менее 1000 мс с последнего вызова)
//
// console.log(log);


function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a)
}

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
//
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

function createStack() {
  const items = []

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5


function multiply(a, b) {
  return a && b ? a * b : (c => a * c)
}

// console.log(multiply(4, 5)); // => 20
// multiply(3, 3); // => 9
// const double = multiply(2);
// double(5);  // => 10
// console.log(double(11)); // => 22


let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// // pockets → bed → table → head
// console.log(head.glasses);
// console.log(pockets.glasses);


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// speedy.eat("apple");
// console.log( speedy.stomach );
//
// console.log( lazy.stomach );


// function B() {
//   this.f = function() { console.log('gggg') }
// }
//
// function A() {}
//
// A.prototype = B.prototype
//
// const F = Object.create(function () { this.h = 1 }, B)
//
//
// console.log('A.prototype', A.prototype, A.prototype.constructor === B);
// console.log('B.prototype', B.prototype);
// console.log('F', F, F.prototype);
//
// const b = new B()
// const a = new A()
// const f = new F()
//
// console.log('a', a);
// console.log('b', b);
// console.log('f', f);


// const b2 = new B()
// const a2 = new A.prototype.constructor()
//
// console.log('b2', b2);
// console.log('a2', a2);
//

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join(',')
//     },
//
//     writable: true,
//     enumerable: false,
//     configurable: true,
//   }
// });
//
// // ваш код, который добавляет метод dictionary.toString
// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
//
// // // только apple и __proto__ выведены в цикле
// // for(let key in dictionary) {
// //   alert(key); // "apple", затем "__proto__"
// // }
//
// // ваш метод toString в действии
// console.log(dictionary); // "apple,__proto__"

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };
//
// let rabbit = new Rabbit("Rabbit");
// // Все эти вызовы делают одно и тоже или нет?
//
// console.log(Rabbit.prototype);
//
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();


function Clock({ template }) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

// let clock = new Clock({template: 'h:m:s'});
// clock.start();


class Clock2 {
  timer;

  constructor({ template }) {
    this.template = template
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };
}

// let clock = new Clock2({ template: 'h:m:s' });
// // clock.start();
// console.log(clock)

// function B() {
//   this.f = function () {
//     console.log(1)
//   }
// }
//
// function A() {
//   // B.call(this)
//   // this.f = function () {
//   //   console.log(1)
//   // }
//   this.__proto__ = B.call(this)
// }
//
//
// const h = Object
//
// const g = new A()
// const j = new h()
// console.log(j, g, A.prototype, B.prototype);


class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

// let clock = new ExtendedClock({ template: 'h:m:s' });
// clock.start();


class Rabbit extends Object {
  constructor(name) {
    super()
    this.name = name;
  }

  lol() {}

  static kek() {
    console.log(1)
  }
}

// console.log(Rabbit.prototype);
//
// let rabbit = new Rabbit("Кроль");
//
// console.log((rabbit.hasOwnProperty('name')));


function delay(ms) {
  return new Promise((resolve => {
    setTimeout(() => resolve(), ms)
  }))
}

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));


// *************************************************

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value, next: null };


    // debugger
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const el = this.find(afterValue);

    if (el) {
      el.next = { value, next: el.next };
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }

      curNode = curNode.next;
    }

    return null;
  }

  delete(value) {

    if (!this.head) {
      return
    }

    if (this.head.value === value) {
      this.head = this.head.next
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode
    }


    // let node = null;

//     while (curNode) {
//       if (curNode.value === value) {
//         if (node) {
//           node.next = curNode.next
//         } else {
//           this.head = curNode.next
//         }

//         curNode = curNode.next;
//         continue
//       }

//       node = curNode
//       curNode = curNode.next;
//     }

    // this.tail = curNode
  }

  toArray() {
    const result = [];

    let newNode = this.head;

    while (newNode) {
      result.push(newNode);
      newNode = newNode.next;
    }

    return result;
  }
}

// const test = new LinkedList();

// test.prepend(5)
// test.append(6);
// test.append(1);
// test.append(6);
// test.append(2);
// test.append(6);
// test.prepend(10)
// test.append(6);
// // test.delete(6)

// test.insertAfter('ppp', 2)

// console.log(test.toArray());


// // сортировка подсчетом
function countSort(arr) {
  const store = []
  const result = []

  for (const i of arr) {
    store[i] = store[i] !== undefined ? store[i] += 1 : 1
  }


  store.forEach((el, i) => {
    for (let j = 0; j < el; j++) {
      result.push(Number(i))
    }
  })

  return result
}


// // устоичивая сортировка подсчетом
function countSort2(arr) {
  let store = Array.from({length: arr.length}, () => 0)

  for (const el of arr) {
    store[el] += 1
  }

  store = store.map((el, ind, array) => {
    if (array[ind + 1] !== undefined) {
      array[ind + 1] += el
    }

    return el
  })

  const result = []

  for (const el of arr) {
    result[store[el] - 1] = el
    store[el] -= 1
  }

  return result
}

// console.log(countSort2([2, 3, 5, 7, 9, 5, 7, 9, 3, 5]))


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// qsort
// взять случайный индекс
// все что меньше этого индекса записать в новый массив
// все что ровно индексу записать в новый массив
// все что больше записать в новый массив
// повторить алгоритм со всеми получившимися массивами кроме масива с индексом
// условие выхода - длина массива меньше или ровно 1
function qSort(arr) {
  const smaller = []
  const equall = []
  const bigger = []

  // debugger
  if (arr.length <= 1) {
    return [...smaller, ...equall, ...bigger]
  }

  const index = randomInteger(0, arr.length - 1)
  const value = arr[index]

  for (const i of arr) {
    if (i < value) {
      smaller.push(i)
    } else if (i > value) {
      bigger.push(i)
    } else {
      equall.push(i)
    }
  }

  return [...qSort(smaller), ...equall, ...qSort(bigger)]
}

// console.log(qSort([2, 3, 5, 7, 9, 5, 7, 9, 3, 5, 11, 555, 5, 2, 45, 667, 77, 2, 3, 5, 7, 9, 5, 7, 9, 3, 5, 11, 555, 5, 2, 45, 667, 77]))


// сортировка слиянием
// разбить массив пополам
//
// function mergeSort(arr) {
//
// }


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let idx = 0, i = 1;

  debugger
  while (i <= nums.length) {
    if (nums[i] !== nums[idx]) {
      nums[++idx] = nums[i];
    }
    i++;
  }
  return idx;
};



// *******************************************


function getFinalOpenedDoors(numDoors) {
  const arr = Array.from({ length: numDoors }, () => true)

  debugger
  for (let i = 1; i <= numDoors; i++) {
    for (let j = i; j <= numDoors; j += i) {
      arr[j-1] = !arr[j-1]
    }
  }

  const result = []
  arr.forEach((item, ind) => {
    if (!item) result.push(ind)
  })

  return result
}

// console.log(getFinalOpenedDoors(10));


function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

// let arrayProto = Array.prototype;
// let arrayMethods = Object.create(arrayProto);
//
// let methodsToPatch = [
//   'push',
//   'pop',
//   'shift',
//   'unshift',
//   'splice',
//   'sort',
//   'reverse'
// ];
//
// methodsToPatch.forEach(function (method) {
//
//   let original = arrayProto[method];
//   def(arrayMethods, method, function mutator () {
//     console.log(this)
//
//     return original
//   })
// })
//
// console.log(arrayMethods.push())

function promisify(f) {
  return function (...args) { // возвращает функцию-обёртку
    return new Promise((resolve, reject) => {
      debugger
      function callback(err, result) { // наш специальный колбэк для f
        if (err) {
          return reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // добавляем колбэк в конец аргументов f

      f.call(this, ...args); // вызываем оригинальную функцию
    });
  };
}


// const loadScript = function() {
//   console.log(arguments, 'loadScript')
//   return 11
// }
// // использование:
// let loadScriptPromise = promisify(loadScript);
// loadScriptPromise().then(() => {
//   console.log('q')
// })



function* gen() {
  debugger
  let ask1 = yield "2 + 2 = ?";

  console.log(ask1); // 4

  let ask2 = yield "3 * 3 = ?"

  console.log(ask2); // 9
}

// let generator = gen();

// console.log( generator.next().value ); // "2 + 2 = ?"

// console.log( generator.next(4).value ); // "3 * 3 = ?"
//
// console.log( generator.next(9).done ); // true


// /**
//  * @param {number[]} bits
//  * @return {boolean}
//  */
// const isOneBitCharacter = function(bits) {
//   debugger
//   if (bits.length < 2) return true
//
// };
//
//
// console.log(isOneBitCharacter([1, 1, 1, 0]))
// console.log(isOneBitCharacter([1, 1, 0]))
// console.log(isOneBitCharacter([0, 1, 0]))
// console.log(isOneBitCharacter([0, 1, 1, 0]))
// console.log(isOneBitCharacter([0, 1, 0, 1, 0]))
// console.log(isOneBitCharacter([1, 0, 0, 1, 0, 0, 0]))


/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]')
};

// console.log(defangIPaddr("1.1.1.1"));
// console.log(defangIPaddr("255.100.50.0"));


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  for (let i=0; i < nums.length/n; i++) {
    [nums[i+1], nums[n + i]] = [nums[n + i], nums[i+1]]
  }
  return nums
};

// console.log(shuffle([2,5,1,3,4,7], 3))
// console.log(shuffle([1,2,3,4,4,3,2,1], 4))


/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  let result = 0

  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] === nums[j]) {
        result += 1
      }
    }
  }

  return result
};

const numIdenticalPairs2 = function(nums) {
  let result = 0
  const store = {}

  debugger

  for (let i of nums) {
    if (store[i] !== undefined) {
      result += store[i] += 1
    } else {
      store[i] = 0
    }
  }

  return result
};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));


const minOperations = function(boxes) {
  const result = []

  for (let i=0; i<boxes.length; i++) {
    for (let j=0; j<boxes.length; j++) {
      if (Number(boxes[j])) {
        result[i] = (result[i] !== undefined ? result[i] + Math.abs(j - i) : Math.abs(j - i))
      }
    }
  }

  return result.length ? result : boxes.split('').map(item => Number(item))
};

// console.log(minOperations(`001`));



/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function(rectangle) {
  this.rectangle = rectangle
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  debugger
  for (let i=row1; i <=row2; i++) {
    // const lastCol = i === row2 ? col2 : this.rectangle[i].length
    // const firstCol = row1 === i ? col1 : 0
    for (let j=col1; j<=col2; j++) {
      this.rectangle[i][j] = newValue
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
  return this.rectangle[row][col]
};

// ["SubrectangleQueries","updateSubrectangle","updateSubrectangle","getValue","getValue","getValue","updateSubrectangle"]
//   [[[[5,2,5,9,4],[10,7,1,4,1],[7,3,1,3,8],[9,7,9,4,9]]],[1,0,3,3,10],[3,2,3,2,4],[2,0],[2,2],[3,4],[1,4,1,4,10]]


// const rec = new SubrectangleQueries([[5,2,5,9,4],[10,7,1,4,1],[7,3,1,3,8],[9,7,9,4,9]])
// console.log(rec.updateSubrectangle(...[1, 0, 3, 3, 10]));
// console.log(rec.updateSubrectangle(...[3, 2, 3, 2, 4]));
// console.log(rec.getValue(...[2, 0]));
// console.log(rec.getValue(...[2, 2]));
// console.log(rec.getValue(...[3, 4]));
// console.log(rec.updateSubrectangle(...[1, 4, 1, 4, 10]));
//
// console.log(rec.rectangle);


// [null,null,null,10,10,10,null]
// [null,null,null,10,10,9,null]
// [
//   [5,2,5,9,4],
//   [10,7,1,4,1],
//   [7,3,1,3,8],
//   [9,7,9,4,9]
// ]

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function(big, medium, small) {
  this.system = {
    1: {max: big, val: 0},
    2: {max: medium, val: 0},
    3: {max: small, val: 0},
  }
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  let car = this.system[carType]
  if (car.max > car.val) {
    car.val += 1
    return true
  }
  return false
};


let fs, args;


const fMap = {
  SubrectangleQueries,
  ParkingSystem,
}

function main(fs, args) {
  const result = []
  let innerClass = null

  for (let i=0; i<args.length; i++) {
    if (innerClass)
      result.push(innerClass[fs[i]](...args[i]))
    else if (fs[i] in fMap)
      innerClass = new fMap[fs[i]](...args[i])
  }

  console.log(innerClass && innerClass.rectangle)
  return result
}

// console.log(main(fs, args))

// fs = ["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue","getValue"]
// args = [[[[1,2,1],[4,3,4],[3,2,1],[1,1,1]]],[0,2],[0,0,3,1,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]
//
// console.log(main(fs, args))


// fs = ["ParkingSystem","addCar","addCar","addCar","addCar"]
// args = [[1,1,0],[1],[2],[3],[1]]
//
// console.log(main(fs, args))


const maxIncreaseKeepingSkyline = function(grid) {

  const bottom = []
  const right = []
  let res = 0

  for (let i=0; i<grid.length; i++) {
    right.push(Math.max(...grid[i]))
  }


  for (let i=0; i<grid[0].length; i++) {

    let max = 0
    for (let j=0; j<grid.length; j++) {
      max = max > grid[j][i] ? max : grid[j][i]
    }

    bottom.push(max)
  }

  for (let i=0; i<grid.length; i++) {

    for (let j=0; j<grid[i].length; j++) {
      const prev = grid[i][j]
      grid[i][j] = bottom[j] < right[i] ? bottom[j] : right[i]
      res += Math.abs(prev - grid[i][j])
    }
  }

  return res
};


// let grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
//
// console.log(maxIncreaseKeepingSkyline(grid));



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  const res = []

  for (let i=0, j=0; i<nums.length; i++) {
    if (i+k < nums.length) {
      res[i+k] = nums[i]
    } else {
      res[j++] = nums[i]
    }
  }

  for (let i=0; i<nums.length; i++) {
    nums[i] = res[i]
  }
};

const rotate2 = function(nums, k) {
  let res = nums.length - k

  for (let i=0; i<nums.length; i++) {
    if (res + i < nums.length) {
      [nums[i], nums[res + i]] = [nums[res + i], nums[i]]
    } else if (i+1 < nums.length) {
      [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
    }
  }
};

const rotate3 = function(nums, k) {
  let p = nums.length - k

  debugger
  for (let i=0, j = 0; i<nums.length; i++) {
    if (i < p) {
      if (p - 1 - i > i)
        [nums[i], nums[p - 1 - i]] = [nums[p - 1 - i], nums[i]]
    } else {
      [nums[j], nums[i]] = [nums[i], nums[j]]
      j++
    }
  }
}

const rotate4 = function(nums, k) {

  for (let i=0; i<k; i++) {
    nums.unshift(nums.pop())
  }
};

// let nums = [1,2,3,4,5,6,7]
//  // [4,3,2,1,7,6,5]
//
// let k = 2
// console.log(rotate(nums, k));
// console.log(nums);


const deepestLeavesSum = function(root) {
  let sumDepth = 0
  let sum = 0
  const dig = ( node, depth ) => {
    if ( ! node.right && ! node.left ) {
      if ( depth > sumDepth ) {
        sumDepth = depth
        sum = node.val
      } else if ( depth === sumDepth ) {
        sum += node.val
      }
      return
    }

    if ( node.left ) dig( node.left, depth + 1 )
    if ( node.right ) dig( node.right, depth + 1 )
  }

  dig( root, 0 )

  return sum
}

// const root = [1,2,3,4,5,null,6,7,null,null,null,null,8]


/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function(points) {
  let maxWidth = 0

  points.sort(([a], [b]) => a - b)

  for (let i=0, j=1; j<points.length; j++, i++) {
    maxWidth = Math.max(Math.abs(points[i][0] - points[j][0]), maxWidth)
  }

  return maxWidth
};

// let arr = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
// arr = [[8,7],[9,9],[7,4],[9,7]]
//
// console.log(maxWidthOfVerticalArea(arr));


/**
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @param {number} mid
 * @return {array}
 */
function merge(arr, start, end, mid) {
  const res = []

  for (let i=0; i<=mid; i++) {
    if (arr[start] > arr[mid+1]) {
      arr[i] = arr[arr[mid+1]]
      mid++
    }
  }

  return res
}


function MergeSort(arr, start = 0, end = arr.length) {
  if (start >= end) return

  const mid = Math.floor(start + (end - 1) / 2)
  MergeSort(arr, start, mid)
  MergeSort(arr, mid+1, end)
  merge(arr, start, end, mid)
}

// let arr = [2, 3, 6, 8, 4, 3, 2, 5, 1, 9]
//
// MergeSort(arr)


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = function(mat) {
  mat = rotateMatrix(mat, mat.length, mat[0].length)
  mat = rotateMatrix(mat, mat.length, mat[0].length)
  return mat
};


function rotateMatrix(mat, h, w) {
  const res = []
  for (let i=0; i<w; i++) {
    const r = []
    for (let j=0; j<h; j++) {
      r.push(mat[j][i])
    }
    r.sort((a, b) => a-b)
    res.push(r)
  }

  return res
}


const diagonalSort2 = function(mat) {
  let w = mat[0].length,
      h = mat.length

  for (let i=0; i<w; i++) {
    let r = []
    for (let j=i, f=0; j<h; j++, f++) {
      if (mat[f]) {
        r.push(mat[f][j])
      }
    }

    r.sort((a, b) => a-b)
    for (let j=i, f=0; f<r.length; j++, f++) {
      if (mat[f]) {
        mat[f][j] = r[f]
      }
    }
  }

  for (let i=0; i<h; i++) {
    let r = []
    for (let j=0; j<w; j++) {
      if (mat[i+j]) {
        r.push(mat[i+j][j])
      }
    }

    r.sort((a, b) => a-b)
    for (let j=0; j<r.length; j++) {
      if (mat[i+j]) {
        mat[i + j][j] = r[j]
      }
    }
  }

  return mat
};

// let arr = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// arr = [
//   [23,55,17,45,15],
//   [11,25,66, 1,69],
//   [84,28,75,33,55],
// ]

// arr = [
//   [3,9],
//   [2,4],
//   [1,2],
//   [9,8],
//   [7,3],
// ]

// [
//   [5, 17, 4, 1,52, 7],
//   [11,11,25,45, 8,69],
//   [14,23,25,44,58,15],
//   [22,27,31,36,50,66],
//   [84,28,75,33,55,68]
// ]

// arr = [
//   [3,97,72,77,16,76,51,22,80,76,84,35,20,68,97,25,86,80,39,22,79,20,15,78,35,68,10,97,5,44,9,49,19,9,70,63,89,84,66,31,29,33,51,24,60,66,69,9,80,15],
//   [34,65,90,21,94,21,10,16,88,56,87,43,50,27,32,86,25,19,100,89,52,87,22,26,45,32,73,51,43,22,88,7,98,74,49,19,61,23,100,68,8,29,27,91,2,24,54,65,18,90],
//   [88,37,76,10,38,29,54,100,46,86,71,87,94,21,91,73,56,61,25,27,91,42,91,63,96,8,98,19,91,38,61,77,81,55,8,40,35,50,91,86,28,73,72,82,33,6,9,31,49,81],
//   [27,45,25,82,45,52,26,47,97,20,58,82,73,23,76,24,96,65,97,14,94,84,50,15,51,41,50,66,67,12,44,64,94,9,74,22,97,80,43,75,32,40,3,9,13,75,14,71,76,25],
//   [39,75,92,20,20,7,30,80,84,30,3,24,39,77,9,12,2,11,99,79,32,45,53,90,52,24,47,85,27,49,64,77,83,72,99,91,1,70,72,38,34,18,22,69,49,34,36,20,11,55],
//   [39,20,86,28,91,11,8,94,57,79,51,91,20,12,88,43,52,31,69,23,90,25,10,36,15,75,18,42,60,32,74,15,24,58,55,88,60,24,54,18,88,7,94,22,53,21,91,51,100,28],
//   [24,90,100,44,67,10,53,77,12,51,77,81,11,6,52,10,30,71,40,21,62,23,61,95,22,30,97,19,56,72,40,70,51,20,61,59,56,85,13,8,10,38,62,18,71,38,6,30,76,16],
//   [52,16,65,15,76,88,59,26,78,81,74,79,14,81,25,7,40,23,51,68,34,41,49,15,90,78,7,53,87,46,73,33,35,19,83,49,5,70,95,91,10,78,54,18,2,34,80,7,90,65],
//   [24,65,37,62,12,45,25,47,42,26,59,49,9,37,35,97,3,22,41,67,84,14,71,58,35,21,98,35,74,83,88,81,95,40,82,85,99,11,12,86,90,86,31,70,42,8,89,42,85,29],
//   [58,34,51,78,70,85,45,95,27,60,69,46,32,65,37,83,32,86,39,91,74,9,84,36,16,78,41,84,68,87,84,15,53,50,24,8,72,41,24,5,37,43,1,85,54,16,65,97,85,91],
//   [87,36,70,36,73,94,62,72,8,85,62,16,13,7,64,21,43,53,64,86,97,16,50,36,83,72,38,89,63,60,15,1,95,54,1,90,88,66,14,79,84,41,40,12,40,73,69,5,74,69],
//   [68,84,26,89,20,19,34,66,64,15,73,6,49,38,30,48,81,62,39,77,71,67,75,53,12,41,8,31,97,2,18,58,85,51,45,31,41,14,51,80,2,78,5,13,4,48,33,74,100,20],
//   [19,88,12,78,47,79,16,49,28,81,78,64,50,5,84,53,48,81,97,58,8,32,36,12,16,85,17,17,91,5,95,4,55,72,19,98,31,42,46,82,99,15,94,74,91,41,85,81,13,78],
//   [12,75,58,70,30,96,99,53,26,27,90,40,59,5,16,71,15,2,55,31,88,45,11,91,47,51,53,36,43,4,9,94,19,33,14,86,94,82,12,4,44,18,49,5,100,24,23,48,53,7],
//   [94,75,58,44,81,53,4,42,87,38,76,3,21,81,92,42,78,25,90,33,68,24,72,2,90,97,25,18,61,16,50,4,88,80,72,7,94,96,23,92,92,48,80,24,71,33,17,29,62,64],
//   [38,4,8,44,86,97,82,17,94,43,27,84,40,78,26,75,93,71,48,90,83,3,17,10,37,3,34,42,11,16,3,55,5,91,77,16,4,46,77,81,86,15,38,11,47,82,68,49,19,6],
//   [19,66,8,99,83,51,57,39,65,53,20,75,66,48,87,54,52,81,53,58,97,20,100,96,28,53,48,78,69,43,52,39,95,56,57,55,14,44,17,8,43,29,14,8,75,96,90,47,33,92],
//   [78,1,7,20,35,50,99,13,33,67,32,72,53,18,61,80,18,62,15,74,36,64,19,45,25,69,62,46,19,41,43,78,79,77,76,10,82,78,57,42,32,44,87,56,21,2,8,19,52,42],
//   [8,7,96,17,76,83,58,64,1,79,86,75,8,53,38,86,12,84,66,27,72,77,91,16,88,39,100,22,68,1,17,68,84,12,3,50,96,4,56,12,57,32,35,47,86,96,95,57,73,2],
//   [9,66,43,65,14,91,58,8,14,83,24,93,4,75,38,32,3,36,19,46,65,19,75,20,85,65,21,48,26,42,33,1,21,91,11,35,3,8,45,17,56,7,14,80,100,79,90,89,97,79],
//   [67,92,25,26,68,76,89,60,20,32,40,21,83,47,38,55,25,94,78,9,68,29,46,35,95,11,54,57,12,7,37,48,75,22,30,36,61,45,94,58,81,99,34,4,91,90,39,21,54,73],
//   [24,32,74,89,91,75,59,1,74,7,47,83,42,57,93,1,74,48,60,68,4,75,71,73,49,72,62,59,90,98,81,92,12,97,95,23,17,39,12,3,64,24,34,70,76,67,16,90,11,51],
//   [97,52,24,40,9,79,74,84,56,58,79,87,52,61,84,93,60,22,57,62,41,37,21,38,84,50,64,11,1,44,59,44,86,62,31,39,63,48,94,89,18,35,43,70,29,21,67,35,82,10],
//   [5,42,78,100,30,10,13,90,60,33,93,23,83,47,89,29,79,30,92,18,56,30,9,42,28,6,87,52,94,33,15,63,97,43,35,82,59,67,96,100,12,81,15,57,26,86,27,64,31,22],
//   [79,82,34,62,77,51,76,3,8,7,90,91,50,62,54,87,83,92,72,37,13,6,70,81,45,95,100,95,35,46,18,2,74,31,26,18,20,45,69,62,12,28,73,10,44,36,69,95,48,7],
//   [99,95,48,31,5,79,2,18,79,36,72,58,45,47,26,45,34,10,11,83,40,1,27,70,77,89,11,84,33,83,57,82,48,74,48,95,73,30,26,35,78,75,33,15,80,38,3,59,80,54],
//   [41,33,63,14,95,54,60,32,42,83,75,61,72,10,94,38,42,29,57,37,2,47,47,55,89,76,36,39,10,15,1,50,83,94,59,39,67,59,83,58,89,15,57,77,85,30,86,13,55,92],
//   [39,64,98,45,15,67,90,48,28,3,7,6,38,90,6,14,82,21,19,63,31,52,90,98,56,89,98,80,6,70,3,43,69,82,45,78,58,5,23,50,82,91,27,15,87,24,10,72,11,47],
//   [96,56,16,87,76,48,97,29,40,78,9,72,71,23,21,27,65,36,100,49,41,99,84,35,37,82,93,43,24,83,65,39,78,10,43,36,97,79,47,43,43,90,88,34,64,83,48,83,50,7],
//   [62,1,80,32,87,35,38,86,86,74,2,17,51,28,31,16,46,93,60,66,70,80,30,75,53,67,67,5,8,10,5,17,71,58,26,40,31,79,95,40,26,83,74,79,40,27,37,43,61,25],
//   [97,52,9,23,2,8,70,13,48,24,23,26,96,71,2,48,14,93,13,32,69,91,32,7,13,71,85,26,49,74,33,35,9,13,98,83,3,43,77,10,88,39,94,69,11,29,65,20,18,40],
//   [16,54,97,66,62,97,66,7,66,80,42,29,57,91,78,60,100,55,39,40,95,84,44,49,93,85,35,49,10,18,7,91,76,77,58,53,4,82,95,82,77,82,64,69,5,34,37,42,26,41],
//   [89,35,37,77,71,98,18,42,29,50,22,85,11,41,20,42,21,42,15,80,2,37,84,50,89,59,30,91,83,40,94,7,67,66,81,65,22,42,86,68,8,30,99,94,88,3,95,52,62,28],
//   [29,95,24,16,9,64,45,97,54,46,56,63,17,44,74,69,11,38,43,42,13,42,77,15,62,36,84,43,9,84,100,50,73,28,24,34,9,62,13,27,7,85,20,94,100,44,18,49,13,12],
//   [77,67,42,49,28,62,8,66,49,10,45,10,15,6,66,43,33,3,60,28,85,73,75,19,93,100,18,70,91,66,5,48,86,79,52,32,5,41,91,17,96,39,24,92,28,54,76,50,15,36],
//   [79,82,74,22,68,5,62,15,54,52,77,23,52,65,10,56,5,55,49,46,26,81,33,53,97,24,3,5,75,15,15,79,97,77,93,1,72,12,91,77,77,73,87,17,46,75,52,70,36,75],
//   [78,7,56,28,19,97,13,80,58,97,59,77,1,5,20,72,46,62,92,57,72,99,64,45,65,41,26,62,8,39,4,3,85,7,26,53,4,2,41,29,2,23,14,25,5,10,60,49,10,64],
//   [18,98,23,21,32,74,66,36,75,78,27,91,74,31,51,83,13,73,8,53,58,89,7,70,21,87,56,87,23,64,72,82,61,36,91,23,50,92,38,70,68,84,74,3,70,1,62,60,25,70],
//   [33,45,48,40,82,37,93,92,93,23,76,93,91,55,94,63,4,48,52,4,76,96,16,16,93,40,63,100,80,56,8,56,82,96,71,34,50,10,2,39,28,90,6,2,32,6,100,15,43,63]
// ]
// [3,97,72,77,16,76,51,22,80,76,84,35,20,68,97,25,86,80,39,22,79,20,15,78,35,68,10,97,5,44,9,49,19,9,70,63,89,84,66,31,29,33,51,24,60,66,69,9,80,15]
// [1,2,5,3,1,2,1,2,1,2,3,1,1,3,11,3,3,3,2,4,14,1,7,4,1,7,4,8,2,2,5,2,1,1,6,33,7,2,20,3,6,13,33,2,9,31,25,9,80,15]
// [1,2,5,3,1,2,1,2,1,2,3,1,1,3,11,3,3,3,2,4,14,1,7,4,1,7,4,8,2,2,5,2,1,1,6,33,7,2,20,31,29,33,51,24,60,66,69,9,80,15]
// console.log(diagonalSort(arr));


const numberOfSteps  = function(num) {
  let res = 0

  while (num > 0) {
    let a = num % 2
    res += a
    if (num > 1) res++
    num = (num - a) / 2
    console.log('1')
  }

  return res
};

const numberOfSteps2 = function(num) {
  let res = 0

  while (num > 0) {
    if (num%2) {
      num -= 1
    } else {
      num /= 2
    }
    res++
    console.log('1')
  }

  return res
};

// console.log(numberOfSteps(62));


/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
  let max = 0
  let sum = 0

  for (let i of gain) {
    sum += i
    max = Math.max(max, sum)
  }

  return max
};

// let arr = [-4,-3,-2,-1,4,3,2]
// arr = [-5,1,5,0,-7]
//
// console.log(largestAltitude(arr));


/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  let ans = start;

  for(let i=1; i<n; i++) {
    start+=2;
    ans=ans^start;
  }

  return ans;
};

// let n = 5,
//     start = 0

// n = 4
// start = 3
//
// n = 1
// start = 7
//
// n = 10
// start = 5

// console.log(xorOperation(n, start));


/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function(arr) {
  if (arr.length <= 1) return 1

  let mid = arr.length > 3 ? Math.floor(arr.length / 2) : Math.ceil(arr.length / 2)

  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)


  if (Math.max(...left) > Math.max(...right)) {
    return 1
  }

  return maxChunksToSorted(left) + maxChunksToSorted(right)
};

// let arr = [4,3,2,1,0]
// arr = [1,0,2,3,4]
// // arr = [1,0,2]
// arr = [0,2,1]
//
// console.log(maxChunksToSorted(arr));


/**
 * @param val
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @constructor
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {

  let BST = null

  function add(node, val) {
    if (BST) {
      if (node.val > val) {
        if (node.left) add(node.left, val)
        else node.left = new TreeNode(val)
      } else {
        if (node.right) add(node.right, val)
        else node.right = new TreeNode(val)
      }
    } else {
      BST = new TreeNode(val)
    }
  }

  for (let i of preorder) {
    add(BST, i)
  }

  return BST
};

// let preorder = [8,5,1,7,10,12]
// preorder = [1,3]
//
// console.log(bstFromPreorder(preorder));
