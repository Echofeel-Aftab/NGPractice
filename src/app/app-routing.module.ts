import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { InputtableComponent } from './inputtable/inputtable.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'inputtable', component: InputtableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
