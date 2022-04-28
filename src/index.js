import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/index.scss'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Countries-Api" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="Countries-Api" element={<App />} /> */}
          {/* <Route path=":countryId" element={country}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
