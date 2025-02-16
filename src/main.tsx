import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Styleguide from './Styleguide.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Page par défaut de vite + react */}
    {/* <App />  */}

    {/* Page styleguide */}
    <Styleguide />
  </StrictMode>,
)
