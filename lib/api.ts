import axios from 'axios';
import { CampersResponse, Camper } from '../types/campers';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getCampers = async () => {
  const res = await axios.get<CampersResponse>('');
  return res.data;
};
export const getCamperById = async () => {
  const result = await axios.get<Camper>('');
  return result.data;
};
