import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#4a49a8',
            900: '#2e227a',
            800: '#3a3490',
            700: '#423e9c',
            600: '#4a49a8',
            500: '#5051b2',
            400: '#686bbe',
            300: '#8286c9',
            200: '#a5a8d9',
            100: '#c8cae8',
            50: '#e9eaf6'
        },
        primary: {
            main: '#1078c6',
            900: '#1058a3',
            800: '#1078c6',
            700: '#1289da',
            600: '#109cee',
            500: '#0daafe',
            400: '#29b8ff',
            300: '#4fc4ff',
            200: '#82d5ff',
            100: '#b4e6ff',
            50: '#e1f5ff'
        },
    },
    typography: {
        body1: { fontSize: '1.2rem', color: 'white' },
        caption: { fontSize: 12 },
    },
});

export default theme;