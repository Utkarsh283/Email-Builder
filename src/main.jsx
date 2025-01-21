import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import EmailEditorPanel from './pages/EmailEditor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailEditorPanel/>
  </StrictMode>,
)
