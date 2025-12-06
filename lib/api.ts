import axios from 'axios';
import { CampersResponse, Camper } from '../types/campers';
import { Filters } from '@/lib/store/useCampersStore';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getCampers = async (filters?: Filters, page = 1, limit = 4) => {
  const params: Record<string, string | number | boolean> = { page, limit };

  if (filters?.location) params.location = filters.location;
  if (filters?.type) params.form = filters.type; // важливо: form на бекенді
  if (filters?.equipment?.length) {
    filters.equipment.forEach((eq) => {
      params[eq] = true;
    });
  }

  const res = await axios.get('/campers', { params });
  console.log('API response:', res.data); // Дебаг API відповіді
  console.log('Total count from headers:', res.headers['x-total-count']); // Перевірка x-total-count

  return {
    items: res.data, // масив кемперів
    total: res.data.total || 0,
  };
};

export const getCamperById = async (id: string) => {
  const result = await axios.get<Camper>(`/campers/${id}`);
  return result.data;
};
