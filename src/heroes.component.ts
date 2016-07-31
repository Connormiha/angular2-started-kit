import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import './style.styl';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    template: `
        <h1>{{title}}</h1>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                (click)="onSelect(hero)"
                [class.selected]="hero === selectedHero"
            >
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    `
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {

    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
