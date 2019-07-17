import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid-common.component.html',
  styleUrls: ['./ag-grid-common.component.scss']
})
export class AgGridCommonComponent implements OnInit {
  @Input() gridColDef: Array<any>;
  @Input() rowData: Array<any>;

  @Output() callBackGrid = new EventEmitter<any>();

  params: any;

  constructor() { }

  ngOnInit() {
  }

  renderGrid(params) {
    this.params = params;
    this.callBackGrid.emit(params);
  }


}
