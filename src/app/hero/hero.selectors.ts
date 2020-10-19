import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Hero, heroFeature, HeroState } from './hero.state'

const getHeroState = createFeatureSelector(heroFeature)

const getHeroes = createSelector(
  getHeroState,
  (state: HeroState) => state.heroes
)

const getHeroNames = createSelector(
  getHeroes,
  (heroes: Hero[]) => heroes.map(hero => hero.name)
)

export const heroQuery = {
  getHeroes,
  getHeroNames
}
