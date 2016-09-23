import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChoiceComponent } from './choice/choice.component';
import { NewsApiService } from './news-api.service';
import { LocalStorageService } from './local-storage.service';

import { LimitPipe } from './limit.pipe';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChoiceComponent,
    LimitPipe,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [NewsApiService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
