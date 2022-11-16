import httpService from '../httpService';
import { API_ENDPOINTS } from '../../utils/api-endpoints';
class BookingService {
  static bookAppoint(payload) {
    return httpService.post(API_ENDPOINTS.book_appointment, payload);
  }
}

export default BookingService;
