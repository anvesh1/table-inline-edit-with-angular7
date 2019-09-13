import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableInlineEditComponent } from './table-inline-edit/table-inline-edit.component';
import { TableRowComponent } from './table-row/table-row.component';
import { ModelComponent } from './model/model.component';
import { InvalidRequestComponent } from './invalid-request/invalid-request.component';


@NgModule({
  declarations: [
    AppComponent,
    TableInlineEditComponent,
    TableRowComponent,
    ModelComponent,
    InvalidRequestComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    NgbTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
