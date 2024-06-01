import { Route, Routes } from "react-router-dom";

import React from 'react'
import HomePage from '../component/HomePage';
import About from '../component/About';
import Contact from '../component/Contact';
import Team from   '../component/Team';
import Services from '../component/Services';

export default function Root() {
  return (
    <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/team" element={<Team/>} />
            <Route path="/services" element={<Services/>}/>
    </Routes>
  )
}
