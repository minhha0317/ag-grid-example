import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-article',
  templateUrl: './example-article-2.component.html',
  styleUrls: ['./example-article-2.component.scss']
})
export class ExampleArticle2Component implements OnInit {
  gridColDef;
  gridParams;
  data;

  constructor() { }

  ngOnInit() {
    this.gridColDef = [
      { field: 'make', width: 80 },
      { field: 'model', width: 80 },
      {
        field: 'price', width: 100, editable: true,
        cellStyle: {textAlign: 'right'},
        valueFormatter: params => params.value.toLocaleString()
      },
      { field: 'inStock', editable: true, width: 80 },
      {
        field: 'value', width: 100, cellStyle: {textAlign: 'right'},
        valueFormatter: params => params.value.toLocaleString()
      },
      {
        field: 'newArrival', width: 120,
        cellRenderer: params => params.value ? 'Yes' : 'No'
      },
      {
        field: 'lastModified', width: 120,
        cellStyle: {textAlign: 'right'},
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

  private formatDate(timeStamp: number) {
    const year = new Date(timeStamp).getFullYear();
    const month = new Date(timeStamp).getMonth();
    const date = new Date(timeStamp).getDate();
    return `${date}/${month + 1}/${year}`;
  }
}
