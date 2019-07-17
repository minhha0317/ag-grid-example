import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss']
})
export class BasicGridComponent implements OnInit {
  /**
   * Define fields of ag grid
   */
  gridColDef;
  /**
   * Data to fill in fields of grid
   */
  data;

  constructor() { }

  ngOnInit() {
    this.gridColDef = [
      { headerName: 'Make', field: 'make' },
      { field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];
    this.data = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }

  gridRendered(params) {
    /**
     * Set row data using built-in function of ag-Grid params
     * headerName will be displayed. If not defined, ag-Grid will use field
     * ag-Grid will find and match data with each field that has been declared
     */
    params.api.setRowData(this.data);
  }

}
