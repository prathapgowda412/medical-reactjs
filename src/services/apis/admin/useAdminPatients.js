import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '../../../utils/api-endpoints';
import httpService from '../../httpService';

export const useAdminAllPatients = (option) => {
  return useQuery([option], async ({ queryKey }) => {
    let payload = { pageSeq: queryKey[0].pageSeq };
    const { data } = await httpService.get(API_ENDPOINTS.admin_all_patients, {
      params: payload,
    });
    return data;
  });
};
