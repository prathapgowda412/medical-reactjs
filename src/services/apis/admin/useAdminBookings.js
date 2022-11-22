import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '../../../utils/api-endpoints';
import httpService from '../../httpService';

export const useAdminAllBookings = (option) => {
  return useQuery([option], async ({ queryKey }) => {
    let payload = { pageSeq: queryKey[0].pageSeq };
    const { data } = await httpService.get(API_ENDPOINTS.admin_all_bookings, {
      params: payload,
    });
    return data;
  });
};
