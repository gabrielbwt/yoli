import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type AuthStore = {
    authToken: string
    setAuthToken: (value: string) => void
}

export const useAuth = create<AuthStore>()(
    persist(
        (set) => ({
            authToken: '',
            setAuthToken: (value) => set({ authToken: value }),
        }),
        {
            name: 'authtoken-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)

