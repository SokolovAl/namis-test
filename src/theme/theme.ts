import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    typography: {
        fontSize: 14,
        allVariants: {
            lineHeight: 1.4,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: '1px solid #e0e0e0',
                },
            },
        },
    },
})
