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

  // Inject Service
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // 初期化 初期データを取得する
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim(); // trim() メソッドは、文字列の両端の空白を削除します
    if (!name) { return; }
    this.heroService.addHero( { name } as Hero )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero); // filter()メソッドは、引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成します。
    // 結果的に、引数heroと一致したものを配列から取り除く
    this.heroService.deleteHero(hero).subscribe();
  }

}
