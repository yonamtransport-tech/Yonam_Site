import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PrivacyPolicy from './PrivacyPolicy'
import CancellationPolicy from './CancellationPolicy'
import AccountDeletion from './AccountDeletion'
import TermsOfUse from './TermsOfUse'

const path = window.location.pathname.replace(/\/+$/, '')
const PAGES: Record<string, () => React.JSX.Element> = {
  '/confidentialite': PrivacyPolicy,
  '/conditions-annulation': CancellationPolicy,
  '/suppression-compte': AccountDeletion,
  '/cgu': TermsOfUse,
}
const Page = PAGES[path] ?? App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
