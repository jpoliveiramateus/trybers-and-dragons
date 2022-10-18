import Race from './Race';

export default class Dwarf extends Race {
  private _health: number;
  static racesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._health = 80;
    Dwarf.racesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._health;
  }

  static createdRacesInstances(): number {
    return Dwarf.racesCreated;
  }
}
