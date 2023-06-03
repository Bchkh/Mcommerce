import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css';

import AppRouter from './components/AppRouter';


function App() {
  return (
    
      <div className='App'>
       <div className='nav'><p className='p1'>Mcommerce Application</p></div>
       <AppRouter />
    
       
      </div>
      
    
  );
}

export default App;
