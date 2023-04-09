import { sample } from 'lodash';

import {
  GENDER_EXPRESSIONS,
  GenderExpression,
} from '~/constants/people/descriptions/meta';

import { getWeightedRandomIndex } from '../weightedRandom';

export const getGenderExpression = (
  currGenderExpression?: GenderExpression
) => {
  // Use either the specified gender expression
  // or pick one randomly
  let genderExpression = currGenderExpression;
  if (!genderExpression) {
    genderExpression =
      GENDER_EXPRESSIONS[getWeightedRandomIndex([0.45, 0.45, 0.1])]!;
  }
  // If 'non-binary' is the gender expression above
  // randomly choose between masc or fem for the purposes of generating a name
  // TODO: This could probably be handled better by having some actual gender neutral names

  return genderExpression === 'non-binary'
    ? (sample(['masc', 'fem']) as GenderExpression)
    : genderExpression;
};
