const path = require('path')

// console.log(path.join(__dirname, "hehe.js"))

console.log(path.basename(__filename))
console.log(path.resolve(__dirname, 'content'))
console.log(path.dirname(__dirname))

const filePath = "image.jpeg";

console.log(path.extname(filePath)); // Output: .jpeg
console.log(path.parse(__filename));