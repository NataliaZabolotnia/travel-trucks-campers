import axios from 'axios';
import { CampersResponse, Camper } from '../types/campers';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getCampers = async () => {
  const res = await axios.get<CampersResponse>('/campers');
  return res.data.items;
};
export const getCamperById = async (id: string) => {
  const result = await axios.get<Camper>(`/campers/${id}`);
  return result.data;
};
