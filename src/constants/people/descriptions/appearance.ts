import { sample, sampleSize } from 'lodash';

import {
  getVerbPluralPattern,
  objectPronounPattern,
  posessiveDeterminerPattern,
  posessiveVerbPattern,
  subjectAndPresentPattern,
  subjectPronounPattern,
} from './meta';

export type AppearanceObject = {
  getDescription: () => string;
  name: string;
};

const uglyTraits = [
  'long, grotesque scars',
  'beetling, unkempt brows',
  'wandering, swollen eye',
  'open sores and boils',
  'pulsing, bulging veins',
  'yellowed, decaying teeth',
  'greasy, matted hair',
  'warped nose',
  'cavernous chin',
  'mottled, bumpy skin',
  'grim, skeletal face',
  'burned and wrinkled flesh',
  'scabby arms and legs',
];

const attractiveTraits = [
  'long, radiant hair',
  'shining, kind eyes',
  'a cute birthmark',
  'a strong, dignified nose',
  'a sweeping, warm smile',
  'a youthful, cherubic face',
  'a trained physique',
  'short, stylish hair',
  'a chiseled jawline',
  'plump, smoochable lips',
  'a mature, serene stare',
];

export const APPEARANCES: AppearanceObject[] = [
  {
    name: 'hideous',
    getDescription: () =>
      `${subjectAndPresentPattern} hideous. ${subjectPronounPattern} ${getVerbPluralPattern(
        'look'
      )} like a monster.`,
  },
  {
    name: 'very ugly',
    getDescription: () =>
      `${subjectAndPresentPattern} ugly, and people find ${posessiveDeterminerPattern} visage unpleasant thanks to ${posessiveDeterminerPattern} ${sample(
        uglyTraits
      )}.`,
  },
  {
    name: 'homely, not quite ugly',
    getDescription: () =>
      `Most consider ${objectPronounPattern} homely: not quite ugly, but a bit worse than plain.`,
  },
  {
    name: 'plain and uninteresting',
    getDescription: () =>
      `${subjectAndPresentPattern} plain and uninteresting to look upon. People notice ${objectPronounPattern}, but ${posessiveDeterminerPattern} appearance fails to make an impression.`,
  },
  {
    name: 'perfectly average',
    getDescription: () =>
      `${subjectAndPresentPattern} perfectly average in appearance.`,
  },
  {
    name: 'attractive',
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} ${sample(
        attractiveTraits
      )} that makes ${objectPronounPattern} attractive to others.`,
  },
  {
    name: 'very comely',
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} ${sampleSize(
        attractiveTraits,
        2
      ).join(', and ')} that make ${objectPronounPattern} quite comely.`,
  },
  {
    name: 'so striking, heads turn to follow',
    getDescription: () =>
      `${subjectAndPresentPattern} one of the great beauties in the land, an individual of almost unsurpassed form and apperance.`,
  },
  {
    name: 'one of the great beauties of the land',
    getDescription: () =>
      `${subjectAndPresentPattern} so striking, heads turn to follow ${objectPronounPattern} wherever ${subjectAndPresentPattern} go.`,
  },
];
