const fs = require('fs');
const path = require('path');


const first = fs.readFileSync(path.join(__dirname, "content", 'first.txt'), 'utf-8');
const second = fs.readFileSync(path.join(__dirname, "content", 'second.txt'), 'utf-8');

fs.writeFileSync('./content/results.txt', `result of fs sync ${first} ${second}`)


fs.writeFile('./content/results.txt', `result of fs sync ${first} ${second} hahaaaaaaaaaaaa replace`, () => {
    console.log('done')
})


fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
})


// fs.rename(__filename, 'FS_Renames.js', () => {
//     console.log('we renamed')
// })


// fs.appendFile(__filename, "console.log(\"hello\") \n", () => {
//     console.log('appended')
// })


// fs.mkdir(`${__dirname}/he`, {  }, () => {
//     console.log('directory dne');
// })

// fs.rmdir('he', () => {
//     console.log('deleted');
// })

// fs.readdir(`content`, (err, files) => {
//     console.log(files);
// })


// fs.stat(__filename, (err, stst) => {
//     console.log(stst)
// })

fs.watch(__filename, (eventType, filename) => {
    console.log(`File changed: ${filename} with event ${eventType}`);
});


