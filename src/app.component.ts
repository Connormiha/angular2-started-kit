import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
