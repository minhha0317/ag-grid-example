import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AgValidate } from '../ag-grid-common/constants/ag-validate';
import { AgValidationService } from '../ag-grid-common/services/ag-validation.service';

@Component({
  selector: 'app-article-three',
  templateUrl: './example-article-3.component.html',
  styleUrls: ['./example-article-3.component.scss']
})
export class ExampleArticle3Component implements OnInit {
  gridColDef;
  gridParams;
  data;
  
  constructor(private agValidation: AgValidationService) {
  }
  
  ngOnInit() {
    this.gridColDef = [
      { headerName: 'Make', field: 'make', width: 80 },
      { headerName: 'Model', field: 'model', editable: true, width: 80 },
      {
        headerName: 'Price', field: 'price', width: 100,
        cellStyle: { textAlign: 'right' },
        valueFormatter: params => params.value.toLocaleString()
      },
      { headerName: 'In Stock', field: 'inStock', editable: true, width: 80 },
      {
        headerName: 'Value', field: 'value', width: 100, cellStyle: { textAlign: 'right' },
        valueFormatter: params => params.value.toLocaleString()
      },
      {
        headerName: 'New Arrival', field: 'newArrival', width: 120,
        cellRenderer: params => params.value ? 'Yes' : 'No'
      },
      {
        headerName: 'Last Modified', field: 'lastModified', width: 120,
        cellStyle: { textAlign: 'right' },
        cellRenderer: params => this.formatDate(params.value)
      }
    ];
    this.data = [
      { newArrival: false, make: 'Toyota', model: 'Celica', price: 35000, inStock: 5, value: 175000, lastModified: 1565370000000 },
      { newArrival: true, make: 'Ford', model: 'Mondeo', price: 32000, inStock: 3, value: 96000, lastModified: 1565542800000 },
      { newArrival: false, make: 'Porsche', model: 'Boxter', price: 72000, inStock: 8, value: 576000, lastModified: 1566274312323 }
    ];
  }
  
  gridRendered(params) {
    this.gridParams = params;
    this.gridParams.api.setRowData(this.data);
  }
  
  cellEditingStopped(params) {
    const field = params.colDef.field;
    if (field === 'price' || field === 'inStock') {
      params.data.value = +params.data.price * +params.data.inStock;
      params.api.refreshCells();
    }
  }
  
  submitGridData() {
    const gridData = this.getAllData(this.gridParams);
    if (this.agValidation.validateDataGrid(this.gridParams, this.gridColDef, gridData)) {
      return;
    }

    console.log(gridData);
  }
  
  private getAllData(params) {
    const dataArr = [];
    params.api.forEachNode(node => {
      dataArr.push(node.data);
    });
    return dataArr;
  }
  
  private formatDate(timeStamp: number) {
    const year = new Date(timeStamp).getFullYear();
    const month = new Date(timeStamp).getMonth();
    const date = new Date(timeStamp).getDate();
    return `${date}/${month + 1}/${year}`;
  }
}
