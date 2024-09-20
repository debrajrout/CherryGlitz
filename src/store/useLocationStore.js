import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLocationStore = create(
    persist(
        (set) => ({
            selectedLocation: {
                name: '',
                latitude: null,
                longitude: null,
            },
            nearestCity: '',
            setLocation: (locationData) => {
                if (
                    locationData &&
                    typeof locationData.name === 'string' &&
                    typeof locationData.latitude === 'number' &&
                    typeof locationData.longitude === 'number'
                ) {
                    set({ selectedLocation: locationData });
                } else {
                    console.error('Invalid location data');
                }
            },
            setNearestCity: (city) => {
                if (typeof city === 'string') {
                    set({ nearestCity: city });
                } else {
                    console.error('Invalid city name');
                }
            },
        }),
        {
            name: 'location-storage',
            getStorage: () => localStorage, // Specify the storage mechanism
        }
    )
);

export default useLocationStore;