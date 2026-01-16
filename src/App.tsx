import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/theme'
import { CRMPage } from './pages/CRMPage.tsx'
import {TopBar} from "./components/TopBar.tsx";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar/>
            <CRMPage/>
        </ThemeProvider>
    )
}
