import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as Excel from "exceljs/dist/exceljs.min.js";

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string, sheetName: string, columnOptions?: any): void {
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(sheetName);

    // Add worksheet title
    worksheet.mergeCells('A1:D4');
    let titleCell = worksheet.getCell('D4');
    titleCell.value = sheetName;
    titleCell.font = {size: 20, bold: true};
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    // Add DocHQ logo
    let imageId = workbook.addImage({
      base64: 'data:image/png;base64,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',
      extension: 'png',
    });
    worksheet.addImage(imageId, {
      tl: { col: 5, row: 0 },
      br: { col: 8.5, row: 4 }
    });
    // Define columns
    worksheet.columns = columnOptions;
    // Add empty padding
    worksheet.addRows([{a:""}, {a:""}]);
    // Insert data
    worksheet.addRows(json);
    // Create excel file
    workbook.xlsx.writeBuffer("temp.xlsx").then(data => {
      this.saveAsExcelFile(data, excelFileName);
    });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}