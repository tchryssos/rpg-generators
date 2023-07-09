import { Tag } from '~/constants/tags';

export type PersonBuildObj = {
  description: string;
  tags: Tag[];
};

export const HEIGHTS = [
  'dimunitive',
  'short',
  'of average height',
  'tall',
  'towering',
] as const;
export type Height = typeof HEIGHTS[number];
export const BODY_TYPES = [
  'gaunt',
  'slender',
  'lean',
  'of average weight',
  'muscular',
  'stocky',
  'portly',
  'obese',
] as const;
export type BodyType = typeof BODY_TYPES[number];
