import { startCase } from 'lodash';

import { SelectOptGroup } from '~/components/Form/SelectInput';
import { NameShape, NameStyle } from '~/typings/names';

const FANTASY_CULTURE_OPTIONS = ['elven', 'orcish', 'goblin'] as const;

const REAL_CULTURE_OPTIONS = [
  'american',
  'british',
  'french',
  'norwegian',
  'german',
  'mexican',
  'korean',
  'japanese',
  'chinese',
  'thai',
  'italian',
  'persian',
  'polynesian',
  'mesoamerican',
  'egyptian',
  'indian',
  'jewish',
  'filipino',
  'irish',
  'swahili',
  'greek',
] as const;

export const SCI_FI_CULTURE_OPTIONS = [
  'blue_skinned_space_babe',
  'space_orc',
  'sci_fi_trope_human',
  'insect_aliens',
] as const;

export const CULTURE_OPTIONS = [
  ...FANTASY_CULTURE_OPTIONS,
  ...REAL_CULTURE_OPTIONS,
  ...SCI_FI_CULTURE_OPTIONS,
] as const;

export type CultureOption = typeof CULTURE_OPTIONS[number];

const makeCultureOptions = (options: readonly string[]) =>
  options.map((c) => ({
    label: startCase(c),
    value: c,
  }));

export const CULTURE_SELECT_OPTIONS: SelectOptGroup[] = [
  {
    label: 'Fantasy',
    options: makeCultureOptions(FANTASY_CULTURE_OPTIONS),
  },
  {
    label: 'Sci-Fi',
    options: [
      {
        label: 'Blue/Green Skinned Space Babe',
        value: 'blue_skinned_space_babe',
        description:
          'From TVTropes: "An exotic yet attractive female alien, tending to look exactly like an attractive female human except for odd coloring and a couple minor features added..." For ex. Asari, Twileks, Na\'vi',
      },
      {
        label: 'Space Orc',
        value: 'space_orc',
        description:
          'From TVTropes: "[Space Orcs retain] distinctly barbaric cultures even while utilizing and producing technology far ahead of what we have in real life." For ex. Krogan, Klingons, various Covenant Races',
      },
      {
        label: 'Tropey Human',
        value: 'sci_fi_trope_human',
        description:
          'A mishmash of various, tropey sci-fi names like "Luke Skywalker", "Banagher Links", or "Ken Masters".',
      },
      {
        label: 'Insectoid Aliens',
        value: 'insect_aliens',
        description:
          'From TVTropes: "Often, inspiration for [insectoid aliens] comes from \'eusocial insects\' ... who are able to create societies with caste systems and complex habitats similar to that of human cities." For ex. The Hive, some Covenant Races, Protheans',
      },
    ] as {
      label: string;
      value: typeof SCI_FI_CULTURE_OPTIONS[number];
      description?: string;
    }[],
  },
  {
    label: 'Real World',
    options: makeCultureOptions(REAL_CULTURE_OPTIONS),
  },
];

export type NameMap<T> = Record<CultureOption, T>;

export const NAME_STYLES: NameStyle[] = [
  'none',
  'asari',
  'asariReverse',
  'asariExtreme',
  'wiscansin',
  'wiscansinReverse',
  'wiscansinExtreme',
  'fitzgerald',
  'fitzgeraldDouble',
  'fitzgeraldReverse',
  'fitzgeraldExtreme',
];

export const NAME_STYLE_DESCRIPTIONS: Record<NameStyle, string> = {
  none: 'Default. Name is unchanged',
  asari: 'For example: "Tsoni" becomes "T\'Soni"',
  asariReverse: 'For example: "Tsoni" becomes "Tson\'I"',
  asariExtreme:
    'For example: "Tsoni" becomes something like "Ts\'On\'I", but no guarantees about the actual arrangement',
  wiscansin: 'For example: "Tpain" becomes "T-Pain"',
  wiscansinReverse: 'For example: "Tpain" becomes "Tpai-N"',
  wiscansinExtreme:
    'For example: "Tpain" becomes something like "T-Pa-In", but no guarantees about the actual arrangement',
  fitzgerald: 'For example: "Francis" becomes "F. Rancis"',
  fitzgeraldDouble: 'For example: "Francis" becomes "F. R. Ancis"',
  fitzgeraldReverse: 'For example: "Francis" becomes "Franci S.',
  fitzgeraldExtreme:
    'For example: "Francis" becomes something like "Fr. An. Cis", but no guarantees about the actual arrangement',
};

export const NAME_STYLE_OPTIONS: SelectOptGroup[] = [
  {
    label: '',
    options: NAME_STYLES.map((ns) => ({
      label: startCase(ns),
      value: ns,
      description: NAME_STYLE_DESCRIPTIONS[ns],
    })),
  },
];

export const NAME_SHAPES: NameShape[] = [
  'familyFirst',
  'familyOnly',
  'givenFirst',
  'givenOnly',
];

export const NAME_SHAPE_DESCRIPTIONS: Record<NameShape, string> = {
  familyFirst:
    'Family name before given name. For example: the generated name "Naruto Uzumaki" becomes "Uzumaki Naruto"',
  familyOnly:
    'Only family name. For example: the generated name "Pablo Picasso" becomes "Picasso"',
  givenFirst:
    'Default. Given name before family name. For example: the generated name "Naruto Uzumaki" remains "Naruto Uzumaki"',
  givenOnly:
    'Only given name. For example: the generated name "Prince Nelson" becomes "Prince"',
};

export const NAME_SHAPE_OPTIONS: SelectOptGroup[] = [
  {
    label: '',
    options: NAME_SHAPES.map((ns) => ({
      label: startCase(ns),
      value: ns,
      description: NAME_SHAPE_DESCRIPTIONS[ns],
    })),
  },
];
