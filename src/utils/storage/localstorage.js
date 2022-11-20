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
  static getPatientdata() {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      let val = window.localStorage.getItem('patient-data');
      if (val) return JSON.parse(val);
      return null;
    }
    return null;
  }
  static getPatientToken() {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      let val = window.localStorage.getItem('patient-auth-token');
      if (val) return JSON.parse(val);
      return null;
    }
    return null;
  }
  static removePatientData() {
    localStorage.removeItem('patient-auth-token');
    localStorage.removeItem('patient-data');
  }

  // for admin
  static storeAdmindata(value) {
    let data = JSON.stringify(value);
    localStorage.setItem('admin-data', data);
  }
  static storeAdminToken(value) {
    let data = JSON.stringify(value);
    localStorage.setItem('admin-auth-token', data);
  }
  static getAdmintdata() {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      let val = window.localStorage.getItem('admin-data');
      if (val) return JSON.parse(val);
      return null;
    }
    return null;
  }
  static getAdminToken() {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      let val = window.localStorage.getItem('admin-auth-token');
      if (val) return JSON.parse(val);
      return null;
    }
    return null;
  }
  static removeAdminData() {
    localStorage.removeItem('admin-auth-token');
    localStorage.removeItem('admin-data');
  }
}
