import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Show from './context/Show'
import First from './First'
import Form from './Form'
import Datafetch from './hooks/Datafetch'
import IncrementDecrement from './hooks/IncrementDecrement'
import Main from './hooks/Main'
import MainProp from './hooks/MainProp'
import Homepage from './pages/Homepage'
import Showcomp from './redux/Showcomp'
import Second from './Second'
import FormValidation from './validation/FormValidation'
const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            
            <Route path='/form' element={<Form/>}/>
            <Route path='/image' element={<Second/>}/>
            <Route path='/hooks/first' element={<IncrementDecrement/>}/> 
            <Route path='/hooks/test' element={<Main/>}/>
            <Route path='/hooks/datafetch' element={<Datafetch/>}/>
            <Route path='/hooks/props' element={<MainProp/>}/>
            <Route path='/context' element={<Show/>}/>
            <Route path='/validation/form' element={<FormValidation/>}/>
            <Route path='/redux/cart' element={<Showcomp/>}/>
        </Routes>
    
    </Router>
  )
}

export default MyRoute