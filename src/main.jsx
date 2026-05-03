import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// DevTools Easter Egg
console.log(
  "%c Ah, I see you are a person of culture! 🧐\n%c Thanks for inspecting my code. You should probably hire me:\n%c ✉️ selva200513@gmail.com ",
  "color: #a855f7; font-size: 20px; font-weight: bold; padding-top: 20px; font-family: monospace;",
  "color: #d1d5db; font-size: 14px; padding-bottom: 10px; font-family: monospace;",
  "color: #000; background: #a855f7; padding: 5px 10px; border-radius: 5px; font-size: 16px; font-weight: bold; font-family: monospace;"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
