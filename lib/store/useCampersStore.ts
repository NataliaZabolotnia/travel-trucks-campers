import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCampers } from '@/lib/api';
import { Camper } from '@/types/campers';
import type { EquipmentKey } from '@/types/equipment';

export interface Filters {
  location: string;
  form: string;
  equipment: EquipmentKey[];
}

interface CampersStore {
  campers: Camper[];
  total: number;
  page: number;
  filters: Filters;
  loading: boolean;
  favorites: string[];
  setLocation: (value: string) => void;
  setType: (value: string) => void;
  toggleEquipment: (eq: EquipmentKey) => void;
  loadFavorites: () => void;
  toggleFavorite: (id: string) => void;
  fetchCampers: (append?: boolean) => Promise<void>;
  loadMore: () => Promise<void>;
  resetFilters: () => void;
}

export const useCampersStore = create<CampersStore>()(
  persist(
    (set, get) => ({
      campers: [],
      total: 0,
      page: 1,
      filters: {
        location: '',
        form: '',
        equipment: [] as EquipmentKey[],
      },

      favorites: [],
      loading: false,

      setLocation: (value) =>
        set((s) => ({ filters: { ...s.filters, location: value } })),

      setType: (value) =>
        set((s) => ({ filters: { ...s.filters, form: value } })),

      toggleEquipment: (eq: EquipmentKey) =>
        set((s) => ({
          filters: {
            ...s.filters,
            equipment: s.filters.equipment.includes(eq)
              ? s.filters.equipment.filter((e) => e !== eq)
              : [...s.filters.equipment, eq],
          },
        })),

      resetFilters: () =>
        set({ filters: { location: '', form: '', equipment: [] }, page: 1 }),

      loadFavorites: () => {
        const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
        set({ favorites: saved });
      },

      toggleFavorite: (id) => {
        set((state) => {
          const exists = state.favorites.includes(id);
          const updated = exists
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id];
          localStorage.setItem('favorites', JSON.stringify(updated));
          return { favorites: updated };
        });
      },

      fetchCampers: async (append = false) => {
        const { filters, page, campers } = get();

        set({ loading: true });

        if (!append) set({ campers: [], page: 1 });
        try {
          const params: Record<string, string | number> = {
            page,
            limit: 4,
            ...(filters.location ? { location: filters.location } : {}),
            ...(filters.form ? { form: filters.form } : {}),
          };

          const data = await getCampers(params);

          console.log('API response:', data);

          const filteredItems = data.items.filter((c) =>
            filters.equipment.every((eq) => c[eq] === true),
          );

          const newCampers = append
            ? [...campers, ...filteredItems]
            : filteredItems;

          set({
            campers: newCampers,
            total: data.total,
            loading: false,
          });
        } catch (error) {
          console.error('Error fetching campers:', error);
          set({ loading: false });
        }
      },

      loadMore: async () => {
        const { page, campers, total } = get();

        if (campers.length >= total) return;

        set({ page: page + 1 });
        await get().fetchCampers(true);
      },
    }),
    {
      name: 'campers-store',
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    },
  ),
);
