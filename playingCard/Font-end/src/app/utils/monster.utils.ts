export enum MonsterType {
  PLANT = 'plant',
  ELECTRIC = 'electric',
  FIRE = 'fire',
  WATER = 'water',
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
  [MonsterType.PLANT]: {
    imageUrl: './img/pik.png',
    color: 'green',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: './img/electric.png',
    color: 'yellow',
  },
  [MonsterType.FIRE]: {
    imageUrl: './img/pik.png',
    color: 'red',
  },
  [MonsterType.WATER]: {
    imageUrl: './img/pik.png',
    color: 'blue',
  },
};
