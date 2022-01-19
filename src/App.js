import Header from "./components/Header";
import AboutPage from "./components/pages/AboutPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutIconLink from "./components/Shared/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
    return (
        <FeedbackProvider>
            <Header text={`Feedback UI`} />
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <AboutIconLink />
        </FeedbackProvider> 
    )
}

export default App;