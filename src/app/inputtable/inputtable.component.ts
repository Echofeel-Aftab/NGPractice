import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-inputtable',
  templateUrl: './inputtable.component.html',
  styleUrls: ['./inputtable.component.css']
})
export class InputtableComponent {

  @ViewChild('myTable')
  myTable!: ElementRef;

  tableData!: any[];
  totalCount!: number;

  ngAfterViewInit() {
    this.initializeTableData();
    this.updateTotalCount();
  }

  initializeTableData() {
    const tableRows = this.myTable.nativeElement.rows;
    this.tableData = [];

    for (let i = 0; i < tableRows.length; i++) {
      const row = tableRows[i];
      const column1Value = row.cells[0].innerHTML;

      this.tableData.push({ column1: column1Value, column2: column1Value });
    }
  }

  updateTotalCount() {
    this.totalCount = this.tableData.filter(row => row.column1).length;
  }

}
