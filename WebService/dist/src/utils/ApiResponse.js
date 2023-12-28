"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(statusCode, data, message) {
        this.statusCode = statusCode;
        this.message = message || "Success";
        this.data = data;
        this.success = true;
    }
}
exports.default = ApiResponse;
