import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sales from './components/Sales'
import Travel from "./components/Travel"
import  Magazine from "./components/Magazine";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <Sales />
    <Travel />
    <Magazine />
  </StrictMode>
);
