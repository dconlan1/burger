var orm = require("../config/orm")

module.exports = {
    devour: function(id) {
        orm.updateOne(id, true)
    },
    insert: function(name) {
        orm.insertOne(name)
    },
    getAll: function() {
        return orm.selectAll()
    }
}