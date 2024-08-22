import logo from './logo.svg';
import './App.css';
import LanguageData from './Lanaguage/LanaguageContext';
import { useState } from 'react';
import HeaderInfo from './Header';
import LanMyForm from './LanMyForm';

function App() {

  const [lan,setlan]= useState('en');
  
  return (
    <LanguageData.Provider value={{lan,setlan}}>

      <HeaderInfo/>
      <LanMyForm/>
    
    </LanguageData.Provider>
  );
}

export default App;
