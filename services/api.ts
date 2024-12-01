import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const registerPatient = async (patientData: any) => {
  const response = await axios.post(`${API_URL}register/patient/`, patientData);
  return response.data;
};

export const registerStaff = async (staffData: any) => {
  const response = await axios.post(`${API_URL}register/staff/`, staffData);
  return response.data;
};

export const login = async (credentials: any) => {
  const response = await axios.post(`${API_URL}login/`, credentials);
  return response.data;
};