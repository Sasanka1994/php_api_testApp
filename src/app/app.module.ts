import { ElishCustomMaterialModule } from './shared/custommaterial/custommaterial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './services/backend.service';
import { MattabledataComponent } from './services/mattabledata/mattabledata.component';

@NgModule({
  declarations: [
    AppComponent,
    MattabledataComponent
  ],
  imports: [
    BrowserModule,
    ElishCustomMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
