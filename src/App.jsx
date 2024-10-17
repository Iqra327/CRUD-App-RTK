import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'
import Delete from './Delete'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/delete' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App