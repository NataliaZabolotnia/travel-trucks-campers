import axios from 'axios';
import { CampersResponse, Camper } from '../types/campers';
import { Filters } from '@/lib/store/useCampersStore';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// export const getCampers = async (
//   filters: Filters,
//   page: number = 1,
//   limit: number = 4,
// ): Promise<CampersResponse> => {
//   const params: Record<string, string | number | boolean> = { page, limit };

//   if (filters.location) params.location = filters.location;
// if (filters.form) params.form = filters.form;
// if (filters.equipment?.length > 0) {
//     filters.equipment.forEach((eq) => {
//       params[eq] = true;
//     });
//   }
//   const res = await axios.get('/campers', { params });
//   console.log('Raw API response:', res.data);
//   console.log('Response headers:', res.headers);

//   const items = res.data.items ?? [];
//   const total = res.data.total ?? items.length;

//   console.log('Processed API response:', { items, total });
//   return { items, total };

// };

export const getCampers = async (
  params: Record<string, string | number>,
): Promise<CampersResponse> => {
  const res = await axios.get('/campers', { params });
  console.log('Raw API response:', res.data);
  const items: Camper[] = res.data.items ?? [];
  const total: number = res.data.total ?? items.length;
  return { items, total };
};

export const getCamperById = async (id: string) => {
  const result = await axios.get<Camper>(`/campers/${id}`);
  return result.data;
};
