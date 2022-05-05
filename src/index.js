import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/index.scss'
import Home from './pages/Home'
import Country from './pages/Country'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/Countries-Api' element={<Home />} />
          <Route path=':country' element={<Country />} />
        </Route>
        <Route path='*' element={<main>Error </main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
