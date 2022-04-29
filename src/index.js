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
      <Routes>
        <Route path="/Countries-Api" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":country" element={<Country />} />
        </Route>
        <Route path="*" element={<main>he</main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
