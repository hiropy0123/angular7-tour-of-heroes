import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // members
  heroes: Hero[];
  selectedHero: Hero;

  // methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Inject Service
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    // 初期化 初期データを取得する
    this.getHeroes();
  }

}
