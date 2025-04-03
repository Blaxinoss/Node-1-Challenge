console.log(__dirname)
console.log(__filename)


function say(name) {
    console.log(`say hi to ${name}`);
}

module.exports.say = say
console.log(module)