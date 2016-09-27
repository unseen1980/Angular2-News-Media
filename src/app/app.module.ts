import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { NewsComponent } from './components/news/news.component';

import { NewsApiService } from './services/news-api.service';
import { LocalStorageService } from './services/local-storage.service';

import { LimitPipe } from './pipes/limit.pipe';


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
