import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import EmailEditorPanel from './pages/EmailEditor.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailEditorPanel/>
  </StrictMode>,
)
