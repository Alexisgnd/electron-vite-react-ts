import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Styleguide from './Styleguide.tsx'
import Authentification from './pages/authentification.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />  */}
    {/* <Styleguide /> */}

    <Authentification />
  </StrictMode>,
)
