"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ipo_entity_1 = __importDefault(require("../../models/ipo.entity"));
const lots_entity_1 = __importDefault(require("../../models/lots.entity"));
function getFileEntity(fileName) {
    var entity;
    if (fileName === 'chittor_ipos.xlsx')
        entity = ipo_entity_1.default;
    else
        entity = lots_entity_1.default;
    return entity;
}
exports.default = getFileEntity;
