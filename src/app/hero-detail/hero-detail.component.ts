import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // 親コンポーネントからデータの受け取り
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
