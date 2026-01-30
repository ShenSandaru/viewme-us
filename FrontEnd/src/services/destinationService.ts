import { destinations } from '@/data/destinations';
import { Destination } from '@/types';

export const destinationService = {
  getAll: async (): Promise<Destination[]> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(destinations), 100);
    });
  },
  getById: async (id: string): Promise<Destination | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(destinations.find(d => d.id === id)), 100);
    });
  }
};
