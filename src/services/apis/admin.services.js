import httpService from '../httpService';
import { API_ENDPOINTS } from '../../utils/api-endpoints';
class AdminServices {
  static login(payload) {
    return httpService.post(API_ENDPOINTS.admin_login, payload);
  }
  static register(payload) {
    return httpService.post(API_ENDPOINTS.admin_register, payload);
  }
}

export default AdminServices;
