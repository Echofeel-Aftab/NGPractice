import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  tableData: any[] = [
    { column6: '345', column7: '', column8: ''},
    { column6: '546', column7: '', column8: ''},
    { column6: '56', column7: '', column8: ''},
    // Add more rows as needed
  ];

  ngOnInit(): void {
    this.copyColumn6ToColumn7();
  }

  copyColumn6ToColumn7(): void {
    for (const row of this.tableData) {
      row.column7 = row.column6;
    }
  }

  getTotal(): number {
    let total = 0;
    for (const row of this.tableData) {
      total += Number(row.column7);
    }
    return total;
  }

  calculateTotal(): number {
    let ttl = 0;
    for (const row of this.tableData) {
      ttl += Number(row.column8) + Number(row.column7);
    }
    return ttl;
  }
  

}
