import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UseState from './components/UseState';
import UseReduce from './components/UseReducer';
import UseEffecthook from './components/UseEffecthook';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<UseState/>} />
        <Route path='/about' element={<UseReduce/>}/>
        
        <Route path='/useEffect' element={<UseEffecthook/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;


