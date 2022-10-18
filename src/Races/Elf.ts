import Race from './Race';

export default class Elf extends Race {
  private _health: number;
  static racesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._health = 99;
    Elf.racesCreated += 1;
  }

  get maxLifePoints(): number {
    return this._health;
  }

  static createdRacesInstances(): number {
    return Elf.racesCreated;
  }
}
