import './style.css';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
