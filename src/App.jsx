import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import React from 'react'
import Navbar from './NavbarComponents/Navbar'
import Home from './RootPageComponents/Home'
import Explore from './ExploreComponents/Explore'
import Sell from './SellComponents/Sell'
import Rent from './RentComponents/Rent'

function App() {
  const [userDetails, updateUserDetails] = useState({name:"null"});
  return (
      <BrowserRouter>
        <Navbar userDetails = {userDetails} updateUserDetails = {updateUserDetails} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/Rent' element={<Rent />} />
          <Route path='/Sell' element={<Sell />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
