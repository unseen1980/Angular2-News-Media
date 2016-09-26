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
    Object.keys(this._localStorageService.getObject('agents')).forEach((agent) => {
      this._newsApiService.fetchArticles(agent)
        .subscribe(
        (res) => {
          this.articles.push(...res['articles']);
        },
        error => console.log('Error!')
        );
    });
  }

  imageCheck(value) {
    return value ? value : 'http://www.icrossanddot.com/wp-content/uploads/news-icon.png';
  }

}
