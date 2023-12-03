import getFileEntity from './getFileEntity';

import Excel from 'exceljs';
import path from 'path';
import formatData from './formatIpoData';
import saveData from './saveData';

export default async function extractDataFrom(fileName: string) {
    console.log(`## Extracting data from ${fileName}`);
    const entity = getFileEntity(fileName)

    const excelFilePath = path.join('./dataset', fileName);
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(excelFilePath);
    const worksheet = workbook.getWorksheet(1);
    //@ts-ignore
    const rowLength = worksheet?._rows.length
    var extractionSuccess = false;

    for (let i = 2; i <= rowLength; i++) {
        try {
            const data = worksheet?.getRow(i).values;
            //@ts-ignore
            console.log(`+ ${data[2]}`);
            const formattedData = await formatData(data, fileName)
            const save = await saveData(formattedData, fileName)
            extractionSuccess = true
        } catch (error: any) {
            console.log(error);
            extractionSuccess = false
            throw Error(error)
            process.exit(0)
        }
    }

    if (extractionSuccess) {
        console.log(`>> Data extracted successfully from ${fileName}`);
        return true
    }
    else {
        console.log(`>> Error extracting data from ${fileName}`);
        return false
    }

}