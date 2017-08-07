'use strict';
var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define('burgers', {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        // freezeTableName: true,
        tableName: 'burgers'
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return burgers;
};