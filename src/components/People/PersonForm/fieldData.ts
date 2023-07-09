import { sample } from 'lodash';

import { CULTURE_OPTIONS } from '~/constants/people/names/meta';
import { Tag } from '~/constants/tags';

export enum FormFields {
  name = 'name',
  baseCulture = 'base_culture',
  givenNameStyle = 'given_name_style',
  familyNameStyle = 'family_name_style',
  nameShape = 'name_shape',
  genderExpression = 'given_name_gender_expression',
  lineage = 'lineage',
  description = 'description',
  tags = 'tags',
  intrigue = 'intrigue',
  loyalty = 'loyalty',
  might = 'might',
  title = 'title',
  houseId = 'house_id',
  height = 'height',
  bodyType = 'body_type',
}

export const defaultValues = {
  [FormFields.name]: '',
  [FormFields.baseCulture]: sample(CULTURE_OPTIONS)!,
  [FormFields.givenNameStyle]: 'none',
  [FormFields.familyNameStyle]: 'none',
  [FormFields.nameShape]: 'givenFirst',
  [FormFields.genderExpression]: 'fem',
  [FormFields.lineage]: 'human',
  [FormFields.title]: '',
  [FormFields.tags]: [] as Tag[],
  [FormFields.description]: '',
  [FormFields.intrigue]: 50,
  [FormFields.loyalty]: 50,
  [FormFields.might]: 50,
  [FormFields.houseId]: '',
  [FormFields.height]: '',
  [FormFields.bodyType]: '',
};

export type PersonFormData = typeof defaultValues;
