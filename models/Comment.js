const path = require("path");
const { sequelize } = require("../DB");
const { DataTypes } = require("sequelize");

const Comment = sequelize.define(
    "Comment",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "comments",
        timestamps: false,
    }
);

module.exports = { Comment };