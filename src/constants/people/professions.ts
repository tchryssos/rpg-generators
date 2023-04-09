import { sample } from 'lodash';

import { createTagsFilter, TaggedItem } from '~/libs/tags';

import { Tag, TagRuleObj } from '../tags';

export const AREAS_OF_SCHOLARSHIP = [
  'architecture',
  'engineering',
  'heraldry',
  'etiquette',
  'law',
  'politics',
  'astronomy',
  'navigation',
  'history',
  'geography',
  'ancient history',
  'literature',
  'philosophy',
  'poetry',
  'theology',
  'music',
  'theater',
  'dance',
  'mathematics',
  'chemistry',
  'physics',
  'biology',
  'botany',
  'zoology',
  'astronomy',
  'geology',
  'medicine',
  'miltiary science',
  'magical theory',
  'anthropology',
  'xenoanthropology',
  'finance',
  'diplomacy',
];

export const getRandomAreaOfScholarship = () => sample(AREAS_OF_SCHOLARSHIP);

type ProfessionObj = {
  name: string;
  tags: Tag[];
};
export const PROFESSIONS: ProfessionObj[] = [
  {
    name: 'academic',
    tags: ['nobility:noble'],
  },
  {
    name: 'apothecary',
    tags: [],
  },
  {
    name: 'healer',
    tags: [],
  },
  {
    name: 'baker',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'blacksmith',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'brewer',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'butcher',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'carpenter',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'cobbler',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'jewler',
    tags: ['quality:artisan'],
  },
  {
    name: 'leatherworker',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'mason',
    tags: ['quality:artisan', 'nobility:commoner'],
  },
  {
    name: 'painter',
    tags: ['quality:artisan', 'quality:artistic'],
  },
  {
    name: 'potter',
    tags: ['quality:artisan', 'quality:artistic'],
  },
  {
    name: 'sculptor',
    tags: ['quality:artisan', 'quality:artistic'],
  },
  {
    name: 'illustrator',
    tags: ['quality:artistic'],
  },
  {
    name: 'musician',
    tags: ['quality:artistic'],
  },
  {
    name: 'bartender',
    tags: ['nobility:commoner'],
  },
  {
    name: 'shopkeeper',
    tags: ['nobility:commoner'],
  },
  {
    name: 'boatman',
    tags: ['nobility:commoner'],
  },
  {
    name: 'cook',
    tags: ['nobility:commoner'],
  },
  {
    name: 'farmer',
    tags: ['urbanity:rural', 'nobility:commoner'],
  },
  {
    name: 'servant',
    tags: ['nobility:commoner'],
  },
  {
    name: 'courtesan',
    tags: ['nobility:noble'],
  },
  {
    name: 'prostitute',
    tags: ['nobility:commoner'],
  },
  {
    name: 'shepard',
    tags: ['nobility:commoner', 'urbanity:rural'],
  },
  {
    name: 'actor',
    tags: ['quality:artistic', 'nobility:noble', 'urbanity:urban'],
  },
  {
    name: 'athlete',
    tags: [],
  },
  {
    name: 'dancer',
    tags: ['quality:artistic', 'nobility:noble', 'urbanity:urban'],
  },
  {
    name: 'fisher',
    tags: ['nobility:commoner', 'urbanity:rural'],
  },
  {
    name: 'whaler',
    tags: ['nobility:commoner', 'urbanity:rural'],
  },
  {
    name: 'gambler',
    tags: [],
  },
  {
    name: 'laborer',
    tags: ['nobility:commoner'],
  },
  {
    name: 'porter',
    tags: ['nobility:commoner'],
  },
  {
    name: 'gravedigger',
    tags: ['nobility:commoner'],
  },
  {
    name: 'miner',
    tags: ['nobility:commoner'],
  },
  {
    name: 'prospector',
    tags: [],
  },
  {
    name: 'merchant',
    tags: [],
  },
  {
    name: 'ship captain',
    tags: ['nobility:noble'],
  },
  {
    name: 'sailor',
    tags: ['nobility:commoner'],
  },
  {
    name: 'agitator',
    tags: ['legality:criminal', 'nobility:commoner'],
  },
  {
    name: 'saboteur',
    tags: ['legality:criminal'],
  },
  {
    name: 'thief',
    tags: ['legality:criminal'],
  },
  {
    name: 'pirate',
    tags: ['legality:criminal'],
  },
  {
    name: 'bandit',
    tags: ['legality:criminal', 'nobility:commoner'],
  },
  {
    name: 'burglar',
    tags: ['legality:criminal'],
  },
  {
    name: 'grave robber',
    tags: ['legality:criminal', 'nobility:commoner'],
  },
  {
    name: 'confidence artist',
    tags: ['legality:criminal', 'nobility:noble', 'nobility:commoner'],
  },
  {
    name: 'fence',
    tags: ['legality:criminal'],
  },
  {
    name: 'smuggler',
    tags: ['legality:criminal'],
  },
  {
    name: 'spy',
    tags: ['legality:criminal'],
  },
  {
    name: 'forger',
    tags: ['legality:criminal'],
  },
  {
    name: 'hired muscle',
    tags: ['nobility:commoner'],
  },
  {
    name: 'thug',
    tags: ['legality:criminal', 'nobility:commoner'],
  },
  {
    name: 'assassin',
    tags: ['legality:criminal'],
  },
  {
    name: 'pickpocket',
    tags: ['legality:criminal', 'nobility:commoner'],
  },
  {
    name: 'mercenary',
    tags: [],
  },
  {
    name: 'constable',
    tags: [],
  },
  {
    name: 'detective',
    tags: [],
  },
  {
    name: 'militiaman',
    tags: ['nobility:commoner'],
  },
  {
    name: 'soldier',
    tags: [],
  },
  {
    name: 'guard',
    tags: ['nobility:commoner'],
  },
  {
    name: 'jailer',
    tags: ['legality:legal'],
  },
  {
    name: 'lawyer',
    tags: ['legality:legal', 'nobility:noble'],
  },
  {
    name: 'torturer',
    tags: [],
  },
  {
    name: 'executioner',
    tags: ['nobility:commoner'],
  },
  {
    name: 'military officer',
    tags: ['nobility:noble'],
  },
  {
    name: 'patrolman',
    tags: ['nobility:commoner'],
  },
  {
    name: 'squire',
    tags: ['nobility:commoner'],
  },
  {
    name: 'priest',
    tags: [],
  },
  {
    name: 'cleric',
    tags: [],
  },
  {
    name: 'animal trainer',
    tags: [],
  },
  {
    name: 'herbalist',
    tags: [],
  },
  {
    name: 'guide',
    tags: ['urbanity:rural', 'nobility:commoner'],
  },
  {
    name: 'explorer',
    tags: ['nobility:noble'],
  },
  {
    name: 'pioneer',
    tags: ['nobility:noble'],
  },
  {
    name: 'hunter',
    tags: ['urbanity:rural'],
  },
  {
    name: 'tracker',
    tags: ['urbanity:rural'],
  },
  {
    name: 'woodcutter',
    tags: ['urbanity:rural'],
  },
  {
    name: 'doctor',
    tags: [],
  },
  {
    name: 'chemist',
    tags: [],
  },
  {
    name: 'customs official',
    tags: ['scope:planet'],
  },
  {
    name: 'technician',
    tags: ['urbanity:urban', 'urbanity:metropolitan'],
  },
  {
    name: 'engineer',
    tags: [],
  },
];

export const getRandomProfession = (target?: TaggedItem, rules?: TagRuleObj) =>
  sample(PROFESSIONS.filter(createTagsFilter(target || {}, rules)));
