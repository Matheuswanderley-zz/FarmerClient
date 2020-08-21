import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FarmersSearchComponent } from './farmers-search/farmers-search.component';
import { HttpModule } from '@angular/http';
import { SearchFarmersService } from "../app/farmers-search/search-farmers.service";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FarmersSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
    
  ],
  providers: [SearchFarmersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
