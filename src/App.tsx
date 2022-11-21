import React from 'react';
import './App.css';

import HomePage from './pages/homepage';
import Startpage from './pages/startpage';
import Mainpage from './pages/mainpage';
import SignUpPage from './pages/signupPage';
import LoginPage from "./pages/loginpage";
import DocumentListPage from './pages/documentListPage';
import PersonalInfoPage from './pages/personalInfoPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* homepage */}
        <Route path='/' element={<HomePage />} />

        {/* startpage */}
        <Route path='/startpage' element={<Startpage />} />

        {/* mainpage */}
        <Route path='/mainpage' element={<Mainpage />} />

        {/* mainpage */}
        <Route path='/signUpPage' element={<SignUpPage />} />
        
        {/* loginpage */}
        <Route path='/loginpage' element={<LoginPage />} />

        {/* loginpage */}
        <Route path='/documentlistpage' element={<DocumentListPage />} />

        {/* loginpage */}
        <Route path='/personalinfopage' element={<PersonalInfoPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
