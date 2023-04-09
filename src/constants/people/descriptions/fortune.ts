import { random, sample } from 'lodash';

import { Tag } from '../../tags';
import {
  getRandomAreaOfScholarship,
  getRandomProfession,
} from '../professions';
import { CLOSE_PEOPLE, FLUID_CLOSE_PEOPLE } from '../sugar';
import { getRandomLeaderTitle } from '../titles';
import {
  DescriptionMap,
  getVerbPluralPattern,
  objectPronounPattern,
  pastVerbPattern,
  posessiveDeterminerPattern,
  posessiveVerbPattern,
  presentVerbPattern,
  subjectAndPresentPattern,
  subjectPronounPattern,
} from './meta';

export type FortuneObj = {
  getDescription: () => string;
  tags: Tag[];
};

export const MAJOR_SETBACKS: FortuneObj[] = [
  {
    getDescription: () =>
      `${subjectPronounPattern} did something unspeakable, and ${posessiveDeterminerPattern} very soul is stained.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} did something ${subjectPronounPattern} deeply regrets.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `a natural disaster destroyed ${posessiveDeterminerPattern} hometown, and ${subjectPronounPattern} had to live as a refugee for a time.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} posessed by a demon.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${posessiveDeterminerPattern} business failed due to ${posessiveDeterminerPattern} incompetence.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} afflicted with a terrible disease and barely survived.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} spent ${random(2, 6)} years in prison.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} cursed by a witch.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} lost ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )} in a freak accident.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} kidnapped and held captive by pirates.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} driven out from ${posessiveDeterminerPattern} previous home and lived in exile for ${random(
        2,
        10
      )} years.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} captured by slavers and lived as a laborer for a foreign master for ${random(
        2,
        10
      )} years.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} driven mad by the loss of ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )} and only recently got out of an asylum.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} accused of being a heretic and nearly executed.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} killed ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )} in a fit of jealousy.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} accidentally desecrated a holy site.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} being hunted by a bounty hunter over a debt ${subjectPronounPattern} inherited from ${posessiveDeterminerPattern} family.`,
    tags: ['rarity:rare'],
  },
];

export const MINOR_SETBACKS: FortuneObj[] = [
  {
    getDescription: () =>
      `${subjectPronounPattern} encountered a strange creature while traveling one night. It attacked ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )}, but ${subjectPronounPattern} escaped unscathed.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} sick recently. Nothing too serious.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} almost killed in a freak accident when ${subjectPronounPattern} ${pastVerbPattern} younger.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} in financial trouble.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} going through a difficult breakup. ${subjectPronounPattern} still ${getVerbPluralPattern(
        'pine'
      )} for ${posessiveDeterminerPattern} former lover.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} disliked in ${posessiveDeterminerPattern} hometown. Something ${subjectPronounPattern} did brought shame upon the people there.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} witnessed something terrible and still seems a little off.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `An argument estranged ${objectPronounPattern} from ${posessiveDeterminerPattern} family.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${getVerbPluralPattern(
        'seem'
      )} terrified that someone is out to kill ${objectPronounPattern}.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} lost something valuable, and now spends ${posessiveDeterminerPattern} free time searching for it.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () => `${subjectAndPresentPattern} an alcoholic.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () => `${subjectAndPresentPattern} a drug addict.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} stole from ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )}.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} suddenly lost ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )}.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${getVerbPluralPattern(
        'know'
      )} something that could humiliate the mayor of ${posessiveDeterminerPattern} home town.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} no memory of what happened for ${random(
        2,
        6
      )} years of ${posessiveDeterminerPattern} life.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )} disappeared without a trace.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} experienced an almost endless string of disappointments and failures in ${objectPronounPattern} life.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} been seen in the tavern more than usual recently.`,
    tags: ['rarity:common'],
  },
];

export const MINOR_WINDFALLS: FortuneObj[] = [
  {
    getDescription: () => `${subjectPronounPattern} recently fell in love.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () => `${subjectPronounPattern} recently got married.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} recently opened a small shop in town.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () => `${subjectPronounPattern} recently had a child.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} recently had an illegitimate child.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} an extensive traveler.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} recently became acquainted with an influential ${getRandomLeaderTitle()}.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} a casual scholar of ${getRandomAreaOfScholarship()}.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} the beneficiary of a distant relative's will.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${getVerbPluralPattern(
        'love'
      )} talking about ${posessiveDeterminerPattern} horses.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () => `${subjectPronounPattern} uncovered a conspiracy.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} saved the lives of an entire family and ${presentVerbPattern} something of a local hero.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} been seen swinging a sword around.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} a luxurious suit that ${subjectPronounPattern} ${posessiveVerbPattern} been wearing around town.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} been seen wearing armor.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} organized some locals to oppose a corrupt official.`,
    tags: ['legality:legal', 'rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} organized some locals to repair the houses of some down-on-their-luck neighbors.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} organized some locals to protest the opening of a new tavern.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} a decorated veteran.`,
    tags: ['rarity:common'],
  },
];

export const MAJOR_WINDFALLS: FortuneObj[] = [
  {
    getDescription: () =>
      `${subjectPronounPattern} did a favor for a powerful ${getRandomLeaderTitle()}.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} stumbled upon a magical artifact and gained some power from it.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} been showing off some new magical power.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} been talking about ${posessiveDeterminerPattern} new ${sample(
        FLUID_CLOSE_PEOPLE
      )}.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () => `${posessiveDeterminerPattern} business is booming.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} a second home in the country.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} the deed to a sailing ship.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} the deed to a tract of land out in the country.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} found a book of magic spells.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${posessiveDeterminerPattern} god ${getVerbPluralPattern(
        'speak'
      )} to ${objectPronounPattern} through dreams.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} recently befriended an influential ${
        getRandomProfession()!.name
      }. They drink together at the pub, discussing life and love.`,
    tags: ['rarity:common'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} discovered a chest full of treasure buried in the woods that turned ${posessiveDeterminerPattern} fortunes around.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} saved the life of a soldier once, who pledged ${sample(
        ['his', 'her', 'their']
      )} life to ${objectPronounPattern}.`,
    tags: ['rarity:uncommon'],
  },
  {
    getDescription: () =>
      `${posessiveDeterminerPattern} lifestyle is funded by ${posessiveDeterminerPattern} ${sample(
        CLOSE_PEOPLE
      )}, who pays a ${objectPronounPattern} a monthly stipend.`,
    tags: ['rarity:uncommon', 'nobility:noble'],
  },
  {
    getDescription: () =>
      `As a child, ${subjectPronounPattern} recieved a warning about future events from a mystic. Since then, ${subjectPronounPattern} ${posessiveVerbPattern} been uncannily lucky.`,
    tags: ['rarity:uncommon'],
  },
];

export const STRANGE_EVENTS: FortuneObj[] = [
  {
    getDescription: () =>
      `As a child ${subjectPronounPattern} ${pastVerbPattern} captured by fairies and lived with them for ${random(
        2,
        5
      )} years. ${subjectPronounPattern} ${posessiveVerbPattern} been very strange ever since.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} turned into an animal and only recently changed back.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} found an ancient tome of forbidden knowledge. When anyone else reads it all they see are blank pages, but ${subjectPronounPattern} ${getVerbPluralPattern(
        'swear'
      )} dark secrets fill the book.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} had a religious epiphany and became a fanatical devotee of some obscure cult.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} visited by a devil. Ever since, ${subjectPronounPattern} ${posessiveVerbPattern} refused to open doors without being explicitly invited to.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${presentVerbPattern} haunted by a ${sample([
        'vengeful',
        'benevolent',
      ])} spirit.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${posessiveDeterminerPattern} stomach problems were caused by an attempted poisoning.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} struck by lightning and now ${posessiveVerbPattern} vivid dreams about plummeting to the ground.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} visited a "hidden" kingdom belonging to some mythical creature. ${subjectPronounPattern} ${posessiveVerbPattern} been searching for the entrance again ever since.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} abducted by strange, unknowable beings while sleeping. They performed bizarre, but ultimately harmless experiments before returning ${objectPronounPattern} to bed.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} died but ${pastVerbPattern} returned to life due to having some unfinished business.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${pastVerbPattern} swallowed by a huge fish, and lived inside of it for ${random(
        2,
        14
      )} days. ${subjectPronounPattern} ${posessiveVerbPattern} spent an inordinate sum inquiring about the others ${subjectPronounPattern} met in the belly of the beast.`,
    tags: ['rarity:legendary'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${posessiveVerbPattern} seen Hell. ${subjectPronounPattern} ${pastVerbPattern} ${sample(
        [
          'enamored',
          'disgusted',
          'excited',
          'terrified',
          'nonplused',
          'surprisingly unmoved',
        ]
      )} by the sight of the place.`,
    tags: ['rarity:rare'],
  },
  {
    getDescription: () =>
      `${subjectPronounPattern} ${getVerbPluralPattern(
        'remember'
      )} a previous life and ${sample([
        `${getVerbPluralPattern(
          'wish',
          'wishes'
        )} ${subjectPronounPattern} could go back to`,
        `${presentVerbPattern} glad to be free of`,
      ])} it.`,
    tags: ['rarity:rare'],
  },
];

export const HUMAN_FORTUNES: FortuneObj[] = [
  ...MAJOR_SETBACKS,
  ...MINOR_SETBACKS,
  ...MINOR_WINDFALLS,
  ...MAJOR_WINDFALLS,
  ...STRANGE_EVENTS,
];

export const FORTUNES: DescriptionMap<FortuneObj[]> = {
  human: HUMAN_FORTUNES,
};
