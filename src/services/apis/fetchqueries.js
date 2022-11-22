import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '../../utils/api-endpoints';
import httpService from '../httpService';

const getBookings = async ({ queryKey }) => {
  let payload = { pageSeq: queryKey[0].pageSeq };
  const { data } = await httpService.get(API_ENDPOINTS.get_all_bookings, {
    params: payload,
  });
  return data;
};

export const useBookingsQuery = (option) => {
  return useQuery([option], getBookings);
};
