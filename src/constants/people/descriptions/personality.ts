export const PERSONALITIES = [
  'cruel, wicked, and self-serving',
  'erratic and unpredictable',
  'believes that might makes right',
  'looks after self first',
  'puts friends first',
  'helps others because it is the right thing to do',
  'wants to do what they think is right',
  'honor and duty guide everything',
  'committed to good and noble causes',
  'lacks social skills',
  'quiet and withdrawn',
  'not particularly outgoing or withdrawn',
  'friendly and personable',
  'loud and boisterous',
  'possesses incredible charisma',
] as const;

export type Personality = typeof PERSONALITIES[number];
