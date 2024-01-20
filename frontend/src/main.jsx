import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// import pages here!!!!
// import dashboard from './pages/dashboard/dashboard.jsx'

// react-router-dom
import { Navigate, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />

    <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} />           */}
      </Routes>
  </BrowserRouter>,
)
