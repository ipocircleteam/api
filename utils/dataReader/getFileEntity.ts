import ipoEntity from "../../models/ipo.entity";
import lotsEntity from "../../models/lots.entity";

export default function getFileEntity(fileName: string) {
    var entity;
    if (fileName === 'chittor_ipos.xlsx') entity = ipoEntity
    else entity = lotsEntity

    return entity
}