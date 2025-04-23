import { IMonster } from '../interfaces/monster.interface';
import { MonsterType } from '../utils/monster.utils';

export class Monster implements IMonster {
  id: number = -1;
  name: string = 'My monster';
  image: string = './img/pik.png';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 40;
  figureCaption: string = 'N°001 Monster';
  attackName: string = 'Geo Impact';
  attackStrength: number = 60;
  attackDescription: string = `This is a long description Blablabla blopblopblop incredible this long description of this attack trolololo`;

  copy(): Monster {
    //Prend tous les paramètres de l'objet Monster et les assignes à cette fonction
    return Object.assign(new Monster(), this);
  }

  static fromJson(monsterJson: IMonster): Monster {
    return Object.assign(new Monster(), monsterJson);
  }

  toJson(): IMonster {
    const monsterJson: IMonster = Object.assign({}, this);
    delete monsterJson.id;
    return monsterJson;
  }
}
