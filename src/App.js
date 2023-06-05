import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Facebook from './components/facebook/Facebook';
import LinkedIn from './components/linkedin/LinkedIn';
import LandingPage from './components/landing_page/LandingPage';
import Header from './components/header/Header';

export default function App() {

  return (
   <>
     < div className="App">
      <Header showParam/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/facebook" element={<Facebook />} />
          <Route exact path="/linkedIn" element={<LinkedIn />} />
        </Routes>
    </div>
   </>
  )
}

