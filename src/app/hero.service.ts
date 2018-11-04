import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Inject Service ( "service-in-service" )
  constructor(private messageService: MessageService) { }

  // heroesの一覧取得
  getHeroes(): Observable<Hero[]> {
    // message
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  // Hero 個別の取得
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
