import { Tag } from '~/constants/tags';

import { subjectAndPresentPattern } from './meta';

export type AgeObj = {
  name: string;
  tags: Tag[];
  description: string;
};

export const AGES: AgeObj[] = [
  {
    name: 'adolescent',
    tags: ['age:young', 'rarity:uncommon'],
    description: `${subjectAndPresentPattern} an adolescent`,
  },
  {
    name: 'young adult',
    tags: ['age:adult', 'rarity:common'],
    description: `${subjectAndPresentPattern} a young adult`,
  },
  {
    name: 'middle-aged adult',
    tags: ['age:adult', 'rarity:common'],
    description: `${subjectAndPresentPattern} a middle-aged adult`,
  },
  {
    name: 'older adult',
    tags: ['age:old', 'rarity:common'],
    description: `${subjectAndPresentPattern} an older adult`,
  },
  {
    name: 'venerable adult',
    description: `${subjectAndPresentPattern} a venerable adult`,
    tags: ['age:old', 'rarity:rare'],
  },
];
