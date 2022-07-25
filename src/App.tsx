import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { PageContainer } from "./components/PageContainer";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <PageContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </PageContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
}
