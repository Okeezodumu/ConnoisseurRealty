import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Designs from './Pages/Designs'



const App = () => {
  React
  return (
    <div>
<BrowserRouter>
<Routes>
<Route>
  <Route path='/' element={<Home />}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/designs' element={<Designs/>}/>
</Route>

</Routes>

</BrowserRouter>

    </div>
  )
}

export default App