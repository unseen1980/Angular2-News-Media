import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideSettings;

  constructor(private _router: Router,
    private _route: ActivatedRoute, ) {
    this._router.events
      .map(event => event instanceof NavigationStart)
      .subscribe(() => {
        this.hideSettings = "/news" !== this._router.url ? true : false;
      });
  }

  ngOnInit() {
  }
}
