const fs = require('node:fs');

const createUser = (username) => {
    const transfercode = Math.floor(Math.random * 10000000);
    const raw = fs.readFileSync('src/data/json-data/User.data.json');
    const d = JSON.parse(fs.readFileSync('src/data/global.json'));
    const data = JSON.parse(raw);
    data.player = username;
    data.transfercode = transfercode;
    let filename = formatNumber(d.users++);
    fs.writeFileSync('src/data/global.json', JSON.stringify(d, null, 4), 'utf-8');

    const hex = Buffer.from(JSON.stringify(data, null, 4), 'utf8')
    .toString('hex')
    .match(/.{1,2}/g)
    .reduce((acc, byte, index) => {
        if (index % 16 === 0 && index !== 0) {
            return acc + '\n' + byte + ' ';
        } else {
            return acc + byte + ' ';
        }
    }, '')
    .trim();


    fs.writeFile('src/data/users/' + filename + ".data",hex, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File created successfully!');
        }
    });

    return "Created Player!"
}

const parseUser = (id) => {
    const hex = fs.readFileSync(`src/data/users/${id}.data`)
    const parsed = hextoString(hex.toString());
    return JSON.parse(parsed);
}


function hextoString(hex) {
    return Buffer.from(hex.split(' ').map(hex => parseInt(hex, 16))).toString();
}

function stringtoHex(string) {
    return Buffer.from(string)
    .toString('hex')
    .match(/.{1,2}/g)
    .reduce((acc, byte, index) => {
        if (index % 16 === 0 && index !== 0) {
            return acc + '\n' + byte + ' ';
        } else {
            return acc + byte + ' ';
        }
    }, '')
    .trim();
}


function formatNumber(number) {
    return String(number).padStart(6, '0');
}


module.exports = {
    createUser,
    parseUser
}