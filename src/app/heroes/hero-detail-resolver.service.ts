import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import { take, mergeMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolverService implements Resolve<Hero> {

  constructor(private HeroService: HeroService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
    const id = +route.paramMap.get('id');

    return this.HeroService.getHero(id).pipe(take(1),
    mergeMap(hero => of(hero))
    );
  }

}