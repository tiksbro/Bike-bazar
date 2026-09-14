import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// This layout wraps every "normal" page (Home, Browse, Vehicle Detail, etc.)
// <Outlet /> is where React Router puts whichever page component matches
// the current URL. Navbar and Footer stay the same on every page, so we
// only write them once, here.
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
