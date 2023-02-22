import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const router = createBrowserRouter([{
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [],
// }]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
