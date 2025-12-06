import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCampers } from '@/lib/api';
import { Camper } from '@/types/campers';

export interface Filters {
  location: string;
  type: string;
  equipment: string[];
}

interface CampersStore {
  campers: Camper[];
  total: number;
  page: number;
  filters: Filters;
  favorites: string[];
  setLocation: (value: string) => void;
  setType: (value: string) => void;
  toggleEquipment: (eq: string) => void;
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
      filters: { location: '', type: '', equipment: [] },
      favorites: [],

      setLocation: (value) =>
        set((state) => ({ filters: { ...state.filters, location: value } })),

      setType: (value) =>
        set((state) => ({ filters: { ...state.filters, type: value } })),

      toggleEquipment: (eq) =>
        set((state) => ({
          filters: {
            ...state.filters,
            equipment: state.filters.equipment.includes(eq)
              ? state.filters.equipment.filter((item) => item !== eq)
              : [...state.filters.equipment, eq],
          },
        })),

      resetFilters: () =>
        set({ filters: { location: '', type: '', equipment: [] } }),

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

      // fetchCampers: async (append = false) => {
      //   if (!append) set({ campers: [], page: 1 });
      //   const { filters, page } = get();
      //   const data = await getCampers(filters, page, 4);
      //   console.log(data);
      //   set({
      //     campers: append ? [...get().campers, ...data.items] : data.items,
      //     total: data.total,
      //   });
      // },
      fetchCampers: async (append = false) => {
        try {
          if (!append) set({ campers: [], page: 1 });
          const { filters, page } = get();
          const data = await getCampers(filters, page, 4);
          console.log('API data:', data); // Логування отриманих даних
          console.log('Campers:', data.items); // Логування саме items
          console.log('Fetched campers:', data.items);

          const campers = Array.isArray(data.items.items)
            ? data.items.items
            : [];
          const total = data.total || 0; // Враховуємо total
          console.log('Fetched campers:', campers); // Логування результатів для відладки
          console.log('Total campers:', total); // Логування загальної кількості

          // set({
          //   campers: append ? [...get().campers, ...data.items] : data.items,
          //   total: totalCampers, // Підставляємо коректне значення
          // });
          // set({
          //   campers, // Масив кемперів
          //   total, // Загальна кількість кемперів
          // });
          set((state) => ({
            campers: append ? [...state.campers, ...campers] : campers,
            total,
          }));
          console.log('State after set:', get()); // Перевірка стану після set
        } catch (error) {
          console.error('Error fetching campers:', error);
        }
      },

      loadMore: async () => {
        set((state) => ({ page: state.page + 1 }));
        await get().fetchCampers(true);
      },
    }),
    {
      name: 'campers-store',
      partialize: (state) => ({
        campers: state.campers,
        favorites: state.favorites,
      }),
    },
  ),
);
