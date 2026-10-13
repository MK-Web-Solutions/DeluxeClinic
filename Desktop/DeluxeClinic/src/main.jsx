import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LangProvider } from './i18n.jsx'
import { Analytics } from '@vercel/analytics/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <App />
      <Analytics />
    </LangProvider>
  </StrictMode>,
)
