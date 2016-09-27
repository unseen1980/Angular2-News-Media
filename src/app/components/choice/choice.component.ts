import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  agents = [];
  sources = {};
  urlData;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _newsApiService: NewsApiService,
    private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    this._newsApiService.fetchSources()
      .subscribe((agents) => {
        this.agents = agents.sources;
      },
      error => console.log('Error!'));

    this.sources = this._localStorageService.getObject('agents');

    if (Object.keys(this.sources).length > 0) {
      this._router.navigate(['/news']);
    }

    this._route.params.subscribe((obj) => {
      if (obj['data']) {
        this._router.navigate(['/settings']);
      }
    });
  }

  select(value) {
    if (!this.sources[value]) {
      this.sources[value] = true;
    } else {
      delete this.sources[value];
    }
    this._localStorageService.setObject('agents', this.sources);
  }

  goToNews() {
    this._router.navigate(['/news']);
  }

  atLeastOne() {
    return Object.keys(this.sources).length > 0;
  }

}
