
const { john } = require('./firstmodule')
const names = require('./firstmodule')
const me = require('./firstmodule').names.me
const { say: SAYFUNCTION } = require('./main')

console.log(me)
console.log(names)
console.log(john)
console.log(SAYFUNCTION('sys'));
console.log(SAYFUNCTION(john));


const fear = {
    item: 'me',
    item2: 'you',
    myarr: [1, 2, 3, { hehe: "hehe" }]
}

console.log(fear)
console.log(fear.myarr[3].hehe)