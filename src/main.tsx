import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ProfileInit from './pages/profile_init.tsx'
import Authentification from './pages/authentification.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/profile_init" element={<ProfileInit />} />
      </Routes>
    </Router>
  </StrictMode>,
)
