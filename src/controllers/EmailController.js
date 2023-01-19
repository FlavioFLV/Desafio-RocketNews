const fs = require('fs');

const readDbFile = () => {
    const db = fs.readFileSync('./src/database/db.json', 'utf-8')
    return JSON.parse(db)
}

const writeDbFile = (content) => {
    const updateFile = JSON.stringify(content);
    return fs.writeFileSync("./src/database/db.json", updateFile, "utf-8")
}



module.exports = {
    
    read: function(req, res, next) {

        let pageContent = readDbFile();

        res.render("listEmails", {
            title: "RocketNews | Lista de emails",
            cssFile: "listEmails",
            emails: pageContent,
            }
        )
    },


}