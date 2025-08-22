import React from 'react'
import Home from './Component/Home/Home'
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>   
     <Routes>
      <Route path="/riteshWebsite" element={ <Home/>}></Route>
     </Routes>
    </div>
  )
}

export default App

