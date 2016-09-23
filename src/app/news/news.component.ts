import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles = [];
  constructor(private _newsApiService: NewsApiService, private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    this._localStorageService.getArray('agents').forEach((agent) => {
      this._newsApiService.fetchArticles(agent)
        .subscribe(
        (res) => {
          for(var article in res['articles']){
            this.articles.push(res['articles'][article])
          }
        },
        error => console.log('Error!')
        )
    });    
  }

  imageCheck(value){
    return value ? value : 'http://www.icrossanddot.com/wp-content/uploads/news-icon.png';
  }

}
