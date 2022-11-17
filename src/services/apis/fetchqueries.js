import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '../../utils/api-endpoints';
import httpService from '../httpService';

const getBookings = async () => {
  const { data } = await httpService.get(API_ENDPOINTS.get_all_bookings);
  return data;
};

export const useBookingsQuery = () => {
  return useQuery(['bookings'], getBookings);
};
