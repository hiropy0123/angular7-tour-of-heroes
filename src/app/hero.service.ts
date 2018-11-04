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

  // heroesの取得
  getHeroes(): Observable<Hero[]> {
    // message
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
