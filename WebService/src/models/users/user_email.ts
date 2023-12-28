import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: 'User Mail',
    tableName: 'user_mail',
    columns: {
        mail: {
            type: 'text',
            nullable: false,
            primary: true
        }
    }
})

export class NewUserMail{
    mail: string;

    constructor() {
        this.mail = ''
    }
}