const path = require('path');
const { sequelize } = require('../DB');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        gender: {
            type: DataTypes.ENUM(["male", "female"]),
            allowNull: true,
            defaultValue: null,
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
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
        tableName: "users",
        timestamps: false,
    }
);

module.exports = { User };