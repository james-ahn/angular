import { Component } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Component({
    selector: 'my-app', // html tag name
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero) {this.selectedHero = hero;}
}

