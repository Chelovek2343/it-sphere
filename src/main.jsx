import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/style.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <>
        <App/>
    </>
);
