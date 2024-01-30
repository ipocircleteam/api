"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_config_1 = require("jest-config");
const config = {
    moduleFileExtensions: [...jest_config_1.defaults.moduleFileExtensions, "mts"],
    testMatch: [
        '__tests__/*.ts?(x)',
        '__tests__/**/*.ts?(x)',
        '__tests__/**/*.tsx?(x)',
        '?(*.)+(spec|test).ts?(x)',
        '?(*.)+(spec|test).tsx?(x)',
    ],
    testPathIgnorePatterns: ['<rootDir>/dist/*.js'],
};
exports.default = config;
