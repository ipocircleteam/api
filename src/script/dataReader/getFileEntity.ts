import ipoEntity from "../../models/ipo/ipo.entity";
import lotsEntity from "../../models/ipo/lots.entity";

export default function getFileEntity(fileName: string) {
  var entity;
  if (fileName === "chittor_ipos.xlsx") entity = ipoEntity;
  else entity = lotsEntity;

  return entity;
}
