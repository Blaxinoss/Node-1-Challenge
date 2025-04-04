const EventEmitter = require("events");


const MyEvent = new EventEmitter()

MyEvent.on('response', (arg1, arg2) => {
    console.log(`data recieved with user ${arg1} ${arg2}`)
})


MyEvent.on('response', () => {
    console.log('Another logic for the same emiiter and order matters')
})

MyEvent.emit('response', 'ahmed', 30)


MyEvent.once('greet', () => {
    console.log('Hello, first-time visitor!');
});
MyEvent.emit('greet'); // "Hello, first-time visitor!"
MyEvent.emit('greet'); // No output (listener removed)


