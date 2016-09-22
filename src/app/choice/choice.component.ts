import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  agents = [];
  selected = [];
  test;

  constructor(private _newsApiService: NewsApiService) { }

  ngOnInit() {
    this._newsApiService.fetchSources()
      .subscribe(
      (agents) => { 
        this.agents = agents.sources;
      },
      error => console.log('Error!')
      )
  }

  callType(value){
    console.log(value, this.test);
  }

}
