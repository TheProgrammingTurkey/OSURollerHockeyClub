import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Home from './pages/home.tsx'
import Team from './pages/team.tsx'
import History from './pages/history.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
