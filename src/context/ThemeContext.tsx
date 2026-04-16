import { createContext } from 'react';
import type { ThemeContextType } from '../types/types';

const defaultContext: ThemeContextType = {
    theme: "Light",
    toggleTheme: () => {}
}
 
export const ThemeContext = createContext<ThemeContextType>(defaultContext);