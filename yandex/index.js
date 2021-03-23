function decorator(fn) {

  return function(data) {
    let mas = data.toString().split(' ');
    return fn(...mas)
  }
}

let sum = (a, b) => {
  return +a + +b
}

sum = decorator(sum)

// let res;
// process.stdin.on('data', data => {
//   res = sum(data);
//   process.stdout.write(res + '');
//   process.exit();
// });

// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const [a, b] = fileContent.toString().split(' ')
//
// const result = Number(a) + Number(b)
//
// fs.writeFileSync("output.txt", result.toString())


module.exports = function (participants, sports) {
  /**
   * Подобно оператору new создает экземпляр объекта,
   * используя функцию-конструктор и параметры для нее
   */
  function constructFrom (fnConstructor, ...params) {
    const res = {};

    fnConstructor.apply(res, params);

    Object.setPrototypeOf(res, fnConstructor.prototype);

    return res;
  }

  /**
   * Создает пары вида [’вид спорта’, ’имя участника’],
   * где первому виду спорта соответствует последний участник
   */
  function assignParticipants () {
    const participants = this.participants;
    const sports = this.sports;
    const orderIndexes = [];
    let range = sports.length;

    for (let i=0, j=range-1; i<range; i++, j--) {
      orderIndexes.push([sports[i], participants[j]])
    }

    return orderIndexes
  }

  function Contest (participants, sports) {
    this.participants = participants;
    this.sports = sports;
  }

  Contest.prototype.assignParticipants = assignParticipants;


  const contest = constructFrom(Contest, participants, sports);

  return contest.assignParticipants();
}

// let participants = ["Mary", "Kate", "Jin", "Farra"]
// let sports = ["football", "hockey", "basketball", "golf"]
//
// console.log(f(participants, sports));
//
//
// let fn = require('./index_1.js')
// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
//
// const { participants, sports } = JSON.parse(fileContent)
// const result = fn(participants, sports)
//
//
// fs.writeFileSync("output.txt", result)
