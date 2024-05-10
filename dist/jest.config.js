"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_config_1 = require("jest-config");
const config = {
    moduleFileExtensions: [...jest_config_1.defaults.moduleFileExtensions, "mts"],
    testMatch: ["<rootDir>/__tests__/services/**/*.test.ts"],
    testPathIgnorePatterns: [
        "<rootDir>/dist/*.js",
        "<rootDir>/node_modules",
        "<rootDir>/.github",
        "<rootDir>/.husky",
        "<rootDir>/prisma",
    ],
};
exports.default = config;
