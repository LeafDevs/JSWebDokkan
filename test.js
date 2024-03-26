
// const fs = require('node:fs')

// const inputString = fs.readFileSync('src/data/User.data');

// // TEXT > HEX
// let hexString = Buffer.from(inputString, 'utf8')
//     .toString('hex')
//     .match(/.{1,2}/g) // Split every byte
//     .reduce((acc, byte, index) => {
//         if (index % 16 === 0 && index !== 0) {
//             return acc + '\n' + byte + ' ';
//         } else {
//             return acc + byte + ' ';
//         }
//     }, '')
//     .trim();


    
    
    
    
//     // HEX > TEXT


// const input = String(fs.readFileSync('src/json-data/User.data.json'));

// const hexPairs = input.split(' ').map(hex => parseInt(hex, 16));

// const decodedString = Buffer.from(hexPairs).toString();



const { createUser } = require('./src/game/data/data.js')

const user = createUser('leaf');

console.log(user);


