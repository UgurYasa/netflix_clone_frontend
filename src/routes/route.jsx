import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../pages/Categories'
import Films from '../pages/Films'

export default function MainRoute() {
  
  return (
    <Routes>
          <Route path="/" element={<Categories/>} />
          <Route path="/films" element={<Films />} />
        </Routes>
  )
}
