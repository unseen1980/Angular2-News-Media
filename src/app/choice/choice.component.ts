import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { LocalStorageService } from '../local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  agents = [];
  selected = [];
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

    this._localStorageService.getArray('agents').forEach((agent) => {
      this.sources[agent] = true;
      this.selected.push(agent);
    });

    if (this.selected.length > 0) {
      this._router.navigate(['/news']);
    }

    this._route.params.subscribe((obj) => {
      if (obj['data']) {
        this._router.navigate(['/settings']);
      }
    });
  }

  select(value) {
    if (this.selected.indexOf(value) === -1) {
      this.selected.push(value);
      this.sources[value] = true;
    } else {
      this.selected.splice(this.selected.indexOf(value), 1);
      delete this.sources[value];
    }
    this._localStorageService.setArray('agents', this.selected);
  }

  goToNews() {
    this._router.navigate(['/news']);
  }

  atLeastOne() {
    return this.selected.length > 0;
  }

}
