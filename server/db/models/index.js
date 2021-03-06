const Sequelize = require("sequelize") 
const { db }  = require("../db")

const Champion = db.define('champion',{
    name : {
        type:   Sequelize.STRING,
        allowNull : false
    }
})

const ChampInfo = db.define('champinfo',{
    splashUrls : {
        type : Sequelize.ARRAY(Sequelize.STRING)
    },
    champId : Sequelize.INTEGER,
    champAbilities : Sequelize.ARRAY(Sequelize.STRING),
    name : Sequelize.STRING
})

module.exports =  {Champion, ChampInfo} 
