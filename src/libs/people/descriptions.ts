import { last, sample } from 'lodash';

import { AgeObj, AGES } from '~/constants/people/descriptions/age';
import {
  GENDER_EXPRESSIONS,
  genderDependentPluralizedVerbPattern,
  genderedReplacementPattern,
  GenderExpression,
  pronounMap,
  PronounMapObj,
  verbReplacementOptionSeparator,
  verbReplacementSeparator,
} from '~/constants/people/descriptions/meta';

import { filterByRarity } from '../tags';

export const getAge = (age?: string) => {
  if (age) {
    return age;
  }

  const ages = filterByRarity(AGES, {
    common: 0.75,
    uncommon: 0.2,
    rare: 0.04,
    exotic: 0.005,
    legendary: 0.005,
  }) as AgeObj[];

  return sample(ages)!.name;
};

export const replaceDescGenderBlanks = (
  descToReplace: string,
  genderExpression: GenderExpression,
  dontCapitalize?: boolean
) =>
  descToReplace
    .split(' ')
    .map((word, i, words) => {
      let nextWord = word;
      const genderedMatch = word.match(genderedReplacementPattern);
      const genderedPluralizedVerbMatch = word.match(
        genderDependentPluralizedVerbPattern
      );
      const lastChar = last(word);
      // If we're replacing a specific gendered word
      // as defined in the pronoun map...
      if (genderedMatch) {
        /**
         * nextWord = the value of the pronoun map
         * where the key is the pattern inside the replacement string
         * ex. for <<subjectPronoun>>, it would be pronounMap.subjectPronoun
         * then, if the last character is anything other than the closing '>'
         * add it back
         * ex. '<<subjectPronoun>>.' gets the period added back to the end
         * */
        nextWord = `${
          pronounMap[genderExpression][
            genderedMatch[0].slice(2, -2) as keyof PronounMapObj
          ]
        }${lastChar === '>' ? '' : lastChar}`;
        // If we're replacing a verb that needs to be pluralized
        // depending on gender...
      } else if (genderedPluralizedVerbMatch) {
        const [matchingTag] = genderedPluralizedVerbMatch;
        /**
         * Split the contents of the replacement angle brackets (< or >)
         * into an array, where the first item is the verb replacement tag
         * ('pluralizedVerb'), the second item is the verb to be pluralized
         * (and potentially a custom pluralized version for verbs where the plural isn't
         * a simple 'add s' pluralization), and the third item is the list of
         * genders for which the verb should be pluralized
         * ex. ['pluralizedVerb', 'try+tries', 'masc+fem']
         */
        const [, verb, pluralizingGenders] = matchingTag
          .slice(2, -2)
          .split(verbReplacementSeparator);
        /**
         * Split the verb and its potential custom pluralization
         * into an array containing those items
         * ex. ['try', 'tries'] or ['try'] if there's no custom specified
         */
        const [singularVerb, pluralizedVerb] = verb.split(
          verbReplacementOptionSeparator
        );
        /**
         * Split the list of pluralizing genders into the individual
         * genders, ex. ['masc', 'fem']
         * Then check if the current genderExpression is included
         * in that list. If yes, prepare to pluralize the verb
         */
        const shouldPluralize = pluralizingGenders
          .split(verbReplacementOptionSeparator)
          .includes(genderExpression);

        // If the last character is anything other than the closing '>'
        // add it back
        nextWord = `${
          shouldPluralize ? pluralizedVerb || `${singularVerb}s` : singularVerb
        }${lastChar === '>' ? '' : lastChar}`;
      }
      // If we're replacing a word AND the previous word ended a sentence
      // (or the current word is the first word of the first sentence),
      // capitalize the first letter of the next word
      return (((genderedMatch || genderedPluralizedVerbMatch) &&
        last(words[i - 1])?.match(/[?.!]/)) ||
        (i === 0 && words.length > 1)) &&
        !dontCapitalize
        ? `${nextWord.charAt(0).toUpperCase()}${nextWord.slice(1)}`
        : nextWord;
    })
    .join(' ');
