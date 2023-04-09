import { flatten } from 'lodash';
import { useCallback, useContext, useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { NotificationContext } from '~/libs/context/NotificationContext';
import { fetchDescription, FetchDescriptionArgs } from '~/libs/people/api';
import { HousesByCampaign } from '~/libs/query/useGetHousesByCampaign';
import { GeneratePersonDescriptionResponse } from '~/pages/api/people/generate';
import { isErrorResponse } from '~/typings/errors.guards';

import { FormFields } from './fieldData';

export const useHouses = (
  houseId: string,
  housesByCampaign: HousesByCampaign | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>
) => {
  useEffect(() => {
    if (houseId && housesByCampaign) {
      const houses = flatten(Object.values(housesByCampaign));
      const house = houses.find((h) => Number(h.house_id) === Number(houseId));
      if (house) {
        setValue(FormFields.baseCulture, house.base_culture);
      }
    }
  }, [houseId, housesByCampaign, setValue]);
};

export const useFetchDescription = ({
  genderExpression,
  bodyType,
  height,
  age,
  appearanceIdx,
  name,
}: FetchDescriptionArgs) => {
  const { addNotifications } = useContext(NotificationContext);

  return useCallback(async () => {
    const descResp = await fetchDescription({
      genderExpression,
      age,
      bodyType,
      height,
      appearanceIdx,
      name,
    });
    if (isErrorResponse(descResp)) {
      addNotifications([descResp.error]);
      return '';
    }
    return (descResp as GeneratePersonDescriptionResponse).description;
  }, [
    genderExpression,
    age,
    height,
    bodyType,
    appearanceIdx,
    addNotifications,
    name,
  ]);
};
