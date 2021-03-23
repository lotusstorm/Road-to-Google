const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ')

const result = Number(a) + Number(b)

fs.writeFileSync("output.txt", result.toString())
