import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  testMatch: [
    "__tests__/*.ts?(x)",
    "__tests__/**/*.ts?(x)",
    "__tests__/**/*.tsx?(x)",
    "?(*.)+(spec|test).ts?(x)",
    "?(*.)+(spec|test).tsx?(x)",
  ],
  testPathIgnorePatterns: ["<rootDir>/dist/*.js"],
};

export default config;
