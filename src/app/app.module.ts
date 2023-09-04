import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { InputtableComponent } from './inputtable/inputtable.component';
import { AftabBranchComponent } from './aftab-branch/aftab-branch.component';
import { AkshayBranchComponent } from './akshay-branch/akshay-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    InputtableComponent,
    AftabBranchComponent,
    AkshayBranchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
