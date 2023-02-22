import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Probs from "./Probs";
import Problem from "./Problem";
import Rand from "./Rand";
import Stats from "./Stats";

function App() {
    return (
    <div className="App">
        {/* Reference: https://www.w3schools.com/react/react_router.asp */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/probs" element={<Probs />} />
                    {/*<Route path="/rand" element={<Rand />} />*/}
                    <Route path="/stats" element={<Stats />} />
                    {/* Reference: https://misscoded.com/react-router-patterns/ */}
                    <Route path="/:comp/:year/:problem" element={<Problem />} />
                    <Route path="/*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
