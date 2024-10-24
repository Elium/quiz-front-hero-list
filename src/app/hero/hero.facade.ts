import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import { heroQuery } from './hero.selectors';
import { Hero, HeroState } from './hero.state';
import * as HeroActions from './hero.actions';

@Injectable({ providedIn: 'root' })
export class HeroFacade {
  public readonly heroes$ = this.store.select(pipe(heroQuery.getHeroes));
  public readonly heroNames$ = this.store.select(pipe(heroQuery.getHeroNames));

  public constructor(private readonly store: Store<HeroState>) {
  }

  public addHero(hero: Hero): void {
    this.store.dispatch(HeroActions.addHero({ hero }));
  }

  public removeHero(name: string): void {
    this.store.dispatch(HeroActions.removeHero({ name }));
  }

  public updateHero(name: string, hero: Hero): void {
    this.store.dispatch(HeroActions.updateHero({ name, hero }));
  }
}
