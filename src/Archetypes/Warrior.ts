import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static archetypesCreated = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior.archetypesCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return this.archetypesCreated;
  }

  get energyType() {
    return this._energy;
  }
}