import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./componnents/NavBar.jsx";
import { Banner } from './componnents/Banner.jsx';
import { Skills } from './componnents/Skills.jsx';
import { Projects } from './componnents/Projects.jsx';
import { PresentationsSection } from './componnents/PresentationsSection.jsx';
import { Contact } from './componnents/Contact.jsx';
import { Footer } from './componnents/Footer.jsx';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        NavBar / >
        <
        Banner / >
        <
        Skills / >
        <
        Projects / > { /* ChatBot Section */ } <
        PresentationsSection / > { /* سيكشن البرزنتاشنز */ } <
        Contact / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;