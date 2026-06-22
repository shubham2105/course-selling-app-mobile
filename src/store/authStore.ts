import {create} from 'zustand'
import { storage } from "../storage/mmkv";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean,
    login: (token: string)=> void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set)=>({
    token: storage.getString('token') ?? null,
    isAuthenticated: !!storage.getString('token'),

    login: (token)=>{
        storage.set('token', token);

        set({
            token,
            isAuthenticated: true,
        });
    },
    logout: () =>{
        storage.remove('token');

        set({
            token: null,
            isAuthenticated: false,
        })
    }
}))