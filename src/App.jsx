import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CameraPage from "./pages/CameraPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/2015-audi-s3/camera1" element={<CameraPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App