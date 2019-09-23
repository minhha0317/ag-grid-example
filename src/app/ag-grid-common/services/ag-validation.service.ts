import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AgValidate } from '../constants/ag-validate';

@Injectable({
  providedIn: 'root'
})
export class AgValidationService {

  constructor(private toast: ToastrService) {
  }

  private validateEachRow(params, columnToValidate, dataToValidate) {
    for (let i = 0; i < dataToValidate.length; i++) {
      const rowIndex = i;
      for (const key in columnToValidate) {
        /**
         * Required
         */
        if (columnToValidate[key].validators.indexOf(AgValidate.Required) > -1 && !dataToValidate[i][key]) {
          this.toast.error(`Trường ${columnToValidate[key].headerName} là bắt buộc, kiểm tra lại dòng sô ${rowIndex + 1}`);
          params.api.setFocusedCell(rowIndex, key);
          return false;
        }

        /**
         * Number
         */
        if (dataToValidate[i][key] && columnToValidate[key].validators.indexOf(AgValidate.Number) > -1) {
          const NUMBER_REGEX = /^\d+$/g;
          if (!NUMBER_REGEX.test(dataToValidate[i][key].toString())) {
            this.toast
              .error(`Chỉ được nhập số nguyên vào trường ${columnToValidate[key].headerName}, kiểm tra lại dòng sô ${rowIndex + 1}`);
            params.api.setFocusedCell(rowIndex, key);
            return false;
          }
        }
      }
    }
  }

  private getColumnToValidate(fieldGrid) {
    const columnToValidate = {};
    fieldGrid.forEach(colDef => {

      if (colDef.validators && colDef.validators.length > 0) {
        columnToValidate[colDef.field] = { headerName: colDef.headerName, validators: colDef.validators };
        if (colDef.maxLength) {
          columnToValidate[colDef.field] = Object.assign(columnToValidate[colDef.field], { maxLength: colDef.maxLength });
        }
      }
    });
    return columnToValidate;
  }

  validateDataGrid(params, fieldGrid, displayedData) {
    return this.validateEachRow(params, this.getColumnToValidate(fieldGrid), displayedData);
  }
}
