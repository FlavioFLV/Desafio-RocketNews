module.exports = {
    
    read: function(req, res, next) {
        res.render("listEmails", {
            title: "RocketNews | Lista de emails",
            cssFile: "listEmails",
            }
        )
    },
}