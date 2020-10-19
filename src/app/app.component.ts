import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { first } from 'rxjs/operators'
import { HeroFacade } from './hero/hero.facade'
import { HeroService } from './hero/hero.service'
import { Hero } from './hero/hero.state'

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public readonly heroes$ = this.heroFacade.heroes$
  public formGroup = this.fb.group({
    name: ['', Validators.required],
    power: ['', Validators.required],
    img: ['', Validators.required]
  })

  public constructor(
    private readonly fb: FormBuilder,
    private readonly heroFacade: HeroFacade,
    private readonly heroService: HeroService
  ) {}

  public delete(heroName: string): void {
    this.heroFacade.removeHero(heroName)
  }

  public edit(hero: Hero): void {
    this.formGroup.patchValue(hero)
  }

  public save(): void {
    if (this.formGroup.valid) {
      const heroName = this.formGroup.get('name').value
      this.heroFacade.heroNames$.pipe(first()).subscribe(heroNames => {
        if (heroNames.includes(heroName)) {
          this.heroFacade.updateHero(heroName, this.formGroup.value)
        }
        else {
          this.heroFacade.addHero(this.formGroup.value)
        }
      })
    }
  }
}
