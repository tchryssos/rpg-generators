import { NextApiResponse } from 'next';
import { v4 as uuid4 } from 'uuid';

import { BwqError } from '~/typings/errors';

interface RequestErrorArgs {
  message?: string;
  status?: number;
  name?: string;
  res: NextApiResponse;
  fallbackPayload?: Record<string, unknown> | Record<string, unknown>[];
}

export type RequestError<T> = BwqError<{
  status: number;
  payload?: T;
}>;

export const handleRequestError = ({
  message,
  status,
  res,
  name,
  fallbackPayload,
}: RequestErrorArgs) => {
  const resStatus = status || 500;
  const resMessage =
    message ||
    `Something went wrong with your ${
      `${name} ` || ''
    }request. Try again later.`;
  const error: RequestError<RequestErrorArgs['fallbackPayload']> = {
    status: resStatus,
    message: resMessage,
    id: uuid4(),
    createdOn: new Date(),
    type: 'error',
    payload: fallbackPayload,
  };
  return res.status(resStatus).json({
    error,
  });
};
