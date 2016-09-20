import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import {MdInputModule} from '@angular2-material/input';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdListModule} from '@angular2-material/list';
import {MdIconModule} from '@angular2-material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //-->angular2-Material :
    MdButtonModule, MdCardModule , MdCheckboxModule , MdInputModule , MdSidenavModule ,
    MdListModule , MdIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
