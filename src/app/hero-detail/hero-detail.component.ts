import { Component, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail/hero-detail.component.html'
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}

// @Input
// 상위 Component에서 하위 Component를 사용할때 Input 값으로 selectedHero를 넣어주게 되면 하위 Component가 정상적으로 동작할 수 있을 겁니다

