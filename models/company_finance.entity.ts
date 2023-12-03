import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from 'uuid'

export default new EntitySchema({
    name: "Company Finances",
    tableName: "company_finances",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            default: () => `'${uuidv4()}'`,
        },
        ipo_id: {
            type: "uuid"
        },
        period_start: {
            type: "timestamp"
        },
        period_end: {
            type: "timestamp"
        },
        assets: {
            type: "double precision"
        },
        revenue: {
            type: "double precision"
        },
        profit_after_tax: {
            type: "double precision"
        },
        networth: {
            type: "double precision"
        },
        reserves: {
            type: "double precision"
        },
        borrowing: {
            type: "double precision"
        }
    }
})