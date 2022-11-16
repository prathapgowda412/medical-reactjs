// this is a hepler class for session storage services

export default class LocalstorageService {
  static get(key) {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      let val = window.localStorage.getItem(key);
      if (val) return JSON.parse(val);
      return null;
    }
    return null;
  }
  static set(key, value) {
    let data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
  static clear() {
    localStorage.clear();
  }
  static storePatientdata(value) {
    let data = JSON.stringify(value);
    localStorage.setItem('patient-data', data);
  }
  static storePatientToken(value) {
    let data = JSON.stringify(value);
    localStorage.setItem('patient-auth-token', data);
  }
}