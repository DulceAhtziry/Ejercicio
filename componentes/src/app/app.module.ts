import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { temaCssComponent } from './componentesCss/temaCss.component';
import { TemaHtmlComponent } from './componentesHtml/temaHtml.component';
import { TemaTsComponent } from './componentesTs/temaTs.component';

@NgModule({
  declarations: [
    AppComponent,
    temaCssComponent,
    TemaHtmlComponent,
    TemaTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
