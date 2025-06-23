'use client'

import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Create the Types for the state
interface CountState{
    count: number;
    increment: () => void; 
    decrement: () => void;
    reset: () => void;
}

export const useCountStore = create<CountState>()(
    persist(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }) 
        }),
        {
            name: "counter-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
