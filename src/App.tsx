import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { CRMPage } from "./pages/CRMPage.tsx";
import { TopBar } from "./components/TopBar.tsx";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                <TopBar />

                <Box sx={{ flex: 1, minHeight: 0 }}>
                    <CRMPage />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
