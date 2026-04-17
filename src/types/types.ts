export interface OrientationType {
    orientation: string;
    isMatch: boolean;
    searchOrientationValue: number;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export type Theme =
    "Light" | "Dark";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}