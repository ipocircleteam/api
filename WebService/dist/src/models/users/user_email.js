"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUserMail = void 0;
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.EntitySchema({
    name: 'User Mail',
    tableName: 'user_mail',
    columns: {
        mail: {
            type: 'text',
            nullable: false,
            primary: true
        }
    }
});
class NewUserMail {
    constructor() {
        this.mail = '';
    }
}
exports.NewUserMail = NewUserMail;
