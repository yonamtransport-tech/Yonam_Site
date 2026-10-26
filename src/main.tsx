import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PrivacyPolicy from './PrivacyPolicy'

const path = window.location.pathname.replace(/\/+$/, '')
const Page = path === '/confidentialite' ? PrivacyPolicy : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
