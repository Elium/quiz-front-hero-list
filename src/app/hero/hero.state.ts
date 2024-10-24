export const heroFeature = 'HERO_FEATURE';

export interface Hero {
  // ???
}

export interface HeroState {
  heroes: Hero[];
}

export const initialState: HeroState = {
  heroes: [
    {
      name: 'Superman',
      power: 'Flight',
      img:
        'https://vignette.wikia.nocookie.net/heroes-fr/images/b/ba/Action_Comics_1000_Variant_Cover.jpg/revision/latest?cb=20200808094812&path-prefix=fr'
    },
    {
      name: 'Flash',
      superpower: 'Super Speed',
      img:
        'https://vignette.wikia.nocookie.net/heroes-fr/images/9/9d/The_Flash_Vol_4_30_Textless.jpg/revision/latest/scale-to-width-down/620?cb=20200808175255&path-prefix=fr'
    },
    {
      name: 'Batman',
      power: 'Wealth',
      image:
        'https://vignette.wikia.nocookie.net/heroes-fr/images/a/a6/Batman_Vol_2_2_Variant_Textless.jpg/revision/latest?cb=20200807105403&path-prefix=fr'
    },
    {
      name: 'Aquaman',
      power: 'Marine Telepathy',
      img: 'https://vignette.wikia.nocookie.net/heroes-fr/images/0/02/A1F6pF0X8uL.jpg/revision/latest/scale-to-width-down/620?cb=20200808181316&path-prefix=fr'
    }
  ]
};
