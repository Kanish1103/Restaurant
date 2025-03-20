import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import ScrollTop from './components/ScrollToTop/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ScrollTop />
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
