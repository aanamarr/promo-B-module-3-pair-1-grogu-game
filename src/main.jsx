
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* hace referencia al use strict de js */}
    <App />
  </StrictMode>,
)