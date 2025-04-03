const os = require('os')
console.log(os.arch())
console.log(os.cpus())
console.log(os.userInfo());

console.log(os.homedir())
console.log(os.uptime() / 60 / 60)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem() / 1024 / 1024 / 1024,
    freemem: os.freemem() / 1024 ** 3
}

console.log(currentOS);

console.log(os.networkInterfaces())
console.log(os.hostname());
console.log(os.availableParallelism())
console.log(os.getPriority());