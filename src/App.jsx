import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Probs from "./Probs";
import Problem from "./Problem";
import Rand from "./Rand";
import Stats from "./Stats";
import Search from "./Search";
import Cust from "./Cust";


function App() {
    return (
    <BrowserRouter>
        <div className="App">

        {/* Reference: https://www.w3schools.com/react/react_router.asp */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/probs" element={<Probs />} />
                    {/*<Route path="/rand" element={<Rand />} />*/}
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/cust" element={<Cust />} />
                    {/* Reference: https://misscoded.com/react-router-patterns/ */}
                    <Route path="/:comp/:year/:problem" element={<Problem />} />
                    <Route path="/*" element={<Home />} />
                </Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
