export type FirstNameObj = {
  masc: string[];
  fem: string[];
};

export type NameShape =
  | 'givenFirst'
  | 'familyFirst'
  | 'givenOnly'
  | 'familyOnly';

export type NameStyle =
  | 'wiscansin'
  | 'asari'
  | 'wiscansinReverse'
  | 'asariReverse'
  | 'wiscansinExtreme'
  | 'asariExtreme'
  | 'fitzgerald'
  | 'fitzgeraldDouble'
  | 'fitzgeraldReverse'
  | 'fitzgeraldExtreme'
  | 'none';
