import { sample } from 'lodash';

import { GenderExpression } from './descriptions/meta';

// From https://en.wikipedia.org/wiki/List_of_religious_titles_and_styles
export const RELIGIOUS_TITLES = [
  'Chaplain',
  'Bishop',
  'Lama',
  'Dob-dob',
  'Geshe',
  'Shabdrung',
  'Ajari',
  'Bodhisattva',
  'Mae ji',
  'Rōshi',
  'Patriarch',
  'Hieromonk',
  'Deacon',
  'Sister',
  'Brother',
  'Elder',
  'Doctor',
  'Chancellor',
  'Primate',
  'Primarch',
  'Abbot',
  'Guru',
  'Firekeeper',
  'Pujari',
  'Rishi',
  'Yogi',
  'Allamah',
  'Dervish',
  'Imam',
  'Mullah',
  'Sheikh',
  'Sultan',
  'Rabbi',
  'Maggid',
  'Hakham',
  'Gadol',
  'Segan',
  'Cantor',
  'Volkhvy',
  'Witch',
  'Wizard',
  'Archdruid',
  'Chairman',
  'Lamane',
  'Mobad',
  'Dastur',
];

export const getRandomReligiousTitle = () => sample(RELIGIOUS_TITLES);

type LeaderTitleObj = {
  title: string;
  gender: GenderExpression;
};

// From https://en.wikipedia.org/wiki/Imperial,_royal_and_noble_ranks
export const LEADERSHIP_TITLES: LeaderTitleObj[] = [
  {
    title: 'Emperor',
    gender: 'masc',
  },
  {
    title: 'Empress',
    gender: 'fem',
  },
  {
    title: 'King',
    gender: 'masc',
  },
  {
    title: 'Queen',
    gender: 'fem',
  },
  {
    title: 'Prince',
    gender: 'masc',
  },
  {
    title: 'Princess',
    gender: 'fem',
  },
  {
    title: 'Duke',
    gender: 'masc',
  },
  {
    title: 'Dutchess',
    gender: 'fem',
  },
  {
    title: 'Nobleman',
    gender: 'masc',
  },
  {
    title: 'Noblewoman',
    gender: 'fem',
  },
  {
    title: 'Governor',
    gender: 'non-binary',
  },
  {
    title: 'Governess',
    gender: 'fem',
  },
  {
    title: 'Noblewoman',
    gender: 'fem',
  },
  {
    title: 'Governor',
    gender: 'non-binary',
  },
  {
    title: 'Governess',
    gender: 'fem',
  },
  {
    title: 'Monarch',
    gender: 'non-binary',
  },
  {
    title: 'Mayor',
    gender: 'non-binary',
  },
  {
    title: 'Police Chief',
    gender: 'non-binary',
  },
  {
    title: 'Senator',
    gender: 'non-binary',
  },
  {
    title: 'Earl',
    gender: 'masc',
  },
  {
    title: 'Baron',
    gender: 'masc',
  },
  {
    title: 'Baroness',
    gender: 'fem',
  },
  {
    title: 'Count',
    gender: 'masc',
  },
  {
    title: 'Countess',
    gender: 'fem',
  },
  {
    title: 'Lord',
    gender: 'masc',
  },
  {
    title: 'Lady',
    gender: 'fem',
  },
  {
    title: 'Tsar',
    gender: 'masc',
  },
  {
    title: 'Tsarina',
    gender: 'fem',
  },
  {
    title: 'Kaiser',
    gender: 'masc',
  },
  {
    title: 'Kaiserin',
    gender: 'fem',
  },
  {
    title: 'Huangdi',
    gender: 'non-binary',
  },
  {
    title: 'Samrat',
    gender: 'masc',
  },
  {
    title: 'Samrājñī',
    gender: 'fem',
  },
  {
    title: 'Tennō',
    gender: 'masc',
  },
  {
    title: 'Kōtei',
    gender: 'non-binary',
  },
  {
    title: 'Tsenpo',
    gender: 'masc',
  },
  {
    title: 'Chanyu',
    gender: 'masc',
  },
  {
    title: 'Khagan',
    gender: 'masc',
  },
  {
    title: 'Khatun',
    gender: 'fem',
  },
  {
    title: 'Padishah',
    gender: 'non-binary',
  },
  {
    title: 'Negus',
    gender: 'non-binary',
  },
  {
    title: 'Maharajah',
    gender: 'masc',
  },
  {
    title: 'Maharani',
    gender: 'fem',
  },
  {
    title: 'Melech',
    gender: 'masc',
  },
  {
    title: 'Malka',
    gender: 'fem',
  },
  {
    title: 'Rex',
    gender: 'non-binary',
  },
  {
    title: 'Basileus',
    gender: 'non-binary',
  },
  {
    title: 'Shah',
    gender: 'masc',
  },
  {
    title: 'Shahbanu',
    gender: 'fem',
  },
  {
    title: 'Sultan',
    gender: 'masc',
  },
  {
    title: 'Sultana',
    gender: 'fem',
  },
];

export const getRandomLeaderTitle = (
  genderExp: GenderExpression = 'non-binary'
) =>
  sample(
    genderExp === 'non-binary'
      ? LEADERSHIP_TITLES
      : LEADERSHIP_TITLES.filter((t) => {
          if (t.gender === 'non-binary' || t.gender === genderExp) {
            return true;
          }
          return false;
        })
  )?.title;
