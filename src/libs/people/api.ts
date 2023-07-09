import { GENERATE_PERSON_API_ROUTE } from '~/constants/routes';
import {
  GeneratePersonDescriptionBody,
  GeneratePersonDescriptionResponse,
  GeneratePersonNameBody,
  GeneratePersonNameResponse,
} from '~/pages/api/people/generate';

import { RequestError } from '../errors/api';

type FetchNameArgs = Omit<GeneratePersonNameBody, 'type'>;
export type FetchDescriptionArgs = Omit<GeneratePersonDescriptionBody, 'type'>;

export const fetchName = async (args: FetchNameArgs) => {
  const resp = await fetch(GENERATE_PERSON_API_ROUTE, {
    method: 'POST',
    body: JSON.stringify({
      type: 'name',
      ...args,
    } as GeneratePersonNameBody),
  });
  if (resp.ok) {
    const { fullName } = (await resp.json()) as GeneratePersonNameResponse;
    return fullName;
  }
  // TODO: This is probably uh... not the best way to handle errors
  return 'ERROR GENERATING NAME';
};

export const fetchDescription = async (args: FetchDescriptionArgs) => {
  const resp = await fetch(GENERATE_PERSON_API_ROUTE, {
    method: 'POST',
    body: JSON.stringify({
      type: 'description',
      ...args,
    }),
  });
  if (resp.ok) {
    return (await resp.json()) as GeneratePersonDescriptionResponse;
  }
  return (await resp.json()) as RequestError<never>;
};
