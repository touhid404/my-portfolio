import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './root/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
)
