const fs = require('fs');
// const db = require('../database/db.json');

const readDbFile = () => {
    const db = fs.readFileSync('./src/database/db.json', 'utf-8')
    return JSON.parse(db)
}

const writeDbFile = (content) => {
    const updateFile = JSON.stringify(content);
    return fs.writeFileSync("./src/database/db.json", updateFile, "utf-8")
}

module.exports = {
    index: function(req, res, next) {
        res.render('index', {
            title: 'RocketNews | Home',
            cssFile: 'index',
            modal: false
        });
    },

    create: function (req, res, next) {         
        const { email } = req.body;
        const currentData = readDbFile();
        
        let date = new Date()

        let lastId = currentData.length - 1

        const data = {
            id: currentData[lastId].id + 1,
            email: email,
            createAt: date.toLocaleDateString()
        }
        currentData.push(data)
        
        writeDbFile(currentData)

        res.render('index', {
            title: 'RocketNews | Home',
            cssFile: 'index',
            modal: true
            }
        );
    }
}