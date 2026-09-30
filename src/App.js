import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PadGrid from "./components/PadGrid";
import "./App.css";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/grid" element={<PadGrid />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;