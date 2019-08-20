import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid-common.component.html',
  styleUrls: ['./ag-grid-common.component.scss']
})
export class AgGridCommonComponent implements OnInit {
  @Input() gridColDef: Array<any>;
  @Input() rowData: Array<any>;
  @Input() frameworkComponents;

  @Output() gridRendered = new EventEmitter<any>();
  @Output() cellEditingStarted = new EventEmitter<any>();
  @Output() cellEditingStopped = new EventEmitter<any>();

  params: any;

  constructor() { }

  ngOnInit() {
  }

  gridReady(params) {
    this.params = params;
    this.gridRendered.emit(params);
  }
}
