import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/index.scss'
import Main from './pages/Main'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          {/* <Route path="Countries-Api" element={<App />} /> */}
          {/* <Route path=":countryId" element={country}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
