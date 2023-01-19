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

        const currentData = readDbFile();
        let limit = 10;
        let page = req.params.page;

        let totalPages = Math.ceil(currentData.length / limit)

        let pageContent;
        if (page == 1) {            
            pageContent = currentData.slice(page - 1, limit)
        } else {
            pageContent = currentData.slice(((page - 1) * limit), (limit * page))
        }

        res.render("listEmails", {
            title: "RocketNews | Lista de emails",
            cssFile: "listEmails",
            emails: pageContent,
            currentPage: page,
            totalPages: totalPages,
        })
    },

    delete: function(req, res, next) {
        let {id, page} = req.params;
        let limit = 10

        const currentData = readDbFile();
        const selectedEmail = currentData.findIndex( email => email.id === parseInt(id))

        currentData.splice(selectedEmail, 1)
        writeDbFile(currentData)

        if ((currentData.length / limit) < page) {
            page = Math.ceil(currentData.length / limit)
        }
        
        res.redirect(`/emails/page/${page}`)
    }

}