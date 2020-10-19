import { Action, createReducer, on } from '@ngrx/store'
import * as HeroActions from './hero.actions'
import { HeroState, initialState } from './hero.state'

const heroReducer = createReducer(
  initialState,
  on(HeroActions.addHero, (state, { hero }) => ({
    ...state,
    heroes: [...state.heroes, hero]
  })),
  on(HeroActions.removeHero, (state, { name }) => ({
    ...state,
    heroes: state.heroes.filter(hero => hero.name !== name)
  })),
  on(HeroActions.updateHero, (state, { name, hero: updatedHero }) => ({
    ...state,
    heroes: state.heroes.map(hero => (hero.name === name ? updatedHero : hero))
  }))
)

export function reducer(state: HeroState | undefined, action: Action) {
  return heroReducer(state, action)
}
