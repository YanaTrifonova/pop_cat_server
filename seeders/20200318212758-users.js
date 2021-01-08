"use strict";
const bcrypt = require("bcrypt");
const {SALT_ROUNDS} = require("../config/constants");

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "test",
                    email: "test@test.com",
                    password: bcrypt.hashSync("test", SALT_ROUNDS),
                    color: "hsl(" + 360 * Math.random() + ',' +
                           (25 + 70 * Math.random()) + '%,' +
                           (85 + 10 * Math.random()) + '%)',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "dummy",
                    email: "a@a.com",
                    password: bcrypt.hashSync("a", SALT_ROUNDS),
                    color: "hsl(" + 360 * Math.random() + ',' +
                           (25 + 70 * Math.random()) + '%,' +
                           (85 + 10 * Math.random()) + '%)',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete("users", null, {});
    },
};
