import { createAction, props } from '@ngrx/store'
import { Hero } from './hero.state'

export const addHero = createAction('[Hero] Add Hero', props<{ hero: Hero }>())

export const removeHero = createAction(
  '[Hero] Remove Hero',
  props<{ name: string }>()
)

export const updateHero = createAction(
  '[Hero] Update Hero',
  props<{ name: string; hero: Hero }>()
)
