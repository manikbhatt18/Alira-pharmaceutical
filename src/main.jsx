import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QuotePopupProvider } from './components/context/QuotePopupContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QuotePopupProvider>
        <App />
      </QuotePopupProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
