import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { GetApi } from './components/getApi.jsx';
import { Kalkulator } from './components/calculator.jsx';
import { LinkTree } from './components/linktree.jsx';
import { ColorProvider } from './provider/colorProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="getapi" element={<GetApi />} />
            <Route path="kalkulator" element={<Kalkulator />} />
            <Route path="linktree" element={<LinkTree />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  </StrictMode>,
)
