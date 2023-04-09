import { startCase } from 'lodash';

import { SelectOptGroup } from '~/components/Form/SelectInput';

export const GENDER_EXPRESSIONS = ['masc', 'fem', 'non-binary'] as const;

export type GenderExpression = typeof GENDER_EXPRESSIONS[number];

export const GENDER_EXPRESSION_OPTIONS: SelectOptGroup[] = [
  {
    label: '',
    options: GENDER_EXPRESSIONS.map((ge) => ({
      label: startCase(ge),
      value: ge,
    })),
  },
];

export const LINEAGE_OPTIONS = ['human'] as const;

export type LineageOption = typeof LINEAGE_OPTIONS[number];

export type DescriptionMap<T> = Record<LineageOption, T>;

export type PronounMapObj = {
  subjectPronoun: string;
  objectPronoun: string;
  posessivePronoun: string;
  posessiveDeterminer: string;
  reflexivePronoun: string;
  presentVerb: string;
  pastVerb: string;
  posessiveVerb: string;
};

export const pronounMap: Record<GenderExpression, PronounMapObj> = {
  masc: {
    subjectPronoun: 'he',
    objectPronoun: 'him',
    posessivePronoun: 'his',
    posessiveDeterminer: 'his',
    reflexivePronoun: 'himself',
    presentVerb: 'is',
    pastVerb: 'was',
    posessiveVerb: 'has',
  },
  fem: {
    subjectPronoun: 'she',
    objectPronoun: 'her',
    posessivePronoun: 'hers',
    posessiveDeterminer: 'her',
    reflexivePronoun: 'herself',
    presentVerb: 'is',
    pastVerb: 'was',
    posessiveVerb: 'has',
  },
  'non-binary': {
    subjectPronoun: 'they',
    objectPronoun: 'them',
    posessivePronoun: 'theirs',
    posessiveDeterminer: 'their',
    reflexivePronoun: 'themself',
    presentVerb: 'are',
    pastVerb: 'were',
    posessiveVerb: 'have',
  },
};

export const genderedReplacementPattern = /<<\w+>>/;
export const verbReplacementSeparator = '|';
export const verbReplacementOptionSeparator = '+';
// for example:
// <<pluralizedVerb|try+tries|masc+fem>>
// or <<pluralizedVerb|try|masc>>
export const genderDependentPluralizedVerbPattern =
  /<<pluralizedVerb\|\w+[+\w+]+?\|[\w++?]+>>/;

type DescReplaceTarget = `<<${keyof PronounMapObj}>>`;
type DescGenderedPluralVerbTarget = `<<pluralizedVerb|${string}|${string}>>`;
export const subjectPronounPattern: DescReplaceTarget = '<<subjectPronoun>>';
export const objectPronounPattern: DescReplaceTarget = '<<objectPronoun>>';
export const posessivePronounPattern: DescReplaceTarget =
  '<<posessivePronoun>>';
export const presentVerbPattern: DescReplaceTarget = '<<presentVerb>>';
export const pastVerbPattern: DescReplaceTarget = '<<pastVerb>>';
export const posessiveDeterminerPattern: DescReplaceTarget =
  '<<posessiveDeterminer>>';
export const reflexivePronounPattern: DescReplaceTarget =
  '<<reflexivePronoun>>';
export const posessiveVerbPattern: DescReplaceTarget = '<<posessiveVerb>>';

// See examples above genderDependentPluralizedVerbPattern
// for example of what this actually gets parsed as
export const getVerbPluralPattern = (
  verb: string,
  pluralizedVerb?: string
): DescGenderedPluralVerbTarget =>
  `<<pluralizedVerb${verbReplacementSeparator}${verb}${
    pluralizedVerb ? `${verbReplacementOptionSeparator}${pluralizedVerb}` : ''
  }${verbReplacementSeparator}${['masc', 'fem'].join(
    verbReplacementOptionSeparator
  )}>>`;

export const subjectAndPresentPattern = `${subjectPronounPattern} ${presentVerbPattern}`;
