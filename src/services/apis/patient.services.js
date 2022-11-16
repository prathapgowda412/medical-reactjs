import httpService from '../httpService';
import { API_ENDPOINTS } from '../../utils/api-endpoints';
class PatientService {
  static login(payload) {
    return httpService.post(API_ENDPOINTS.patient_login, payload);
  }
  static register(payload) {
    return httpService.post(API_ENDPOINTS.patient_register, payload);
  }
}

export default PatientService;
