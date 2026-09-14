import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Browse from './pages/Browse'
import VehicleDetail from './pages/VehicleDetail'
import NotFound from './pages/NotFound'


// This is the "map" of our whole site. Every <Route> pairs a URL path
// with the page component that should show for it. Routes that share
// <MainLayout> (navbar + footer) are nested inside it.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Browse />} />
          <Route path="/vehicle/:slug" element={<VehicleDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
