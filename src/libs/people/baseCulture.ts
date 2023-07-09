import { filter, sample } from 'lodash';

import { CULTURE_OPTIONS, CultureOption } from '~/constants/people/names/meta';

interface GetBaseCultureArgs {
  baseCultureOne?: CultureOption;
  baseCultureTwo?: CultureOption;
  mixCultures?: boolean;
}

export const getBaseCultures = ({
  baseCultureOne,
  baseCultureTwo,
  mixCultures,
}: GetBaseCultureArgs): {
  baseCultureOne: CultureOption;
  baseCultureTwo: CultureOption;
} => {
  const primaryCulture = baseCultureOne || sample(CULTURE_OPTIONS)!;

  return {
    baseCultureOne: primaryCulture,
    baseCultureTwo: mixCultures
      ? baseCultureTwo ||
        sample(filter(CULTURE_OPTIONS, (c) => c !== primaryCulture))!
      : primaryCulture,
  };
};
