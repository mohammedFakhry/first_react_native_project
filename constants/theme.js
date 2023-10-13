import { PixelRatio } from 'react-native';
const fontScale = PixelRatio.getFontScale();

export const SIZES = {
    small: 9*fontScale,
    meduim: 14*fontScale,
    large: 18*fontScale,
    xlarge: 24*fontScale,
}
export const COLORS = {
    bg: '#111827',
    cardBg: '#1f2937',
    second: '#4f46e5',
    white: '#fff',
    black: '#000',
    gray: '#ddd',
}
export const FONTS = {
    bold: 'InterBold',
    semibold: 'InterSemiBold',
    medium: 'InterMedium',
    light: 'InterLight',
    regular: 'InterRegular',
}