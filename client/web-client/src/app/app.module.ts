/**
 * Created by peterkim on 9/10/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdSidenavModule } from "@angular2-material/sidenav";
@NgModule({
    imports: [
        BrowserModule,
        MdSidenavModule,
        MdToolbarModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
