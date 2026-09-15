import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import { CompareProvider } from './context/CompareContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Browse from './pages/Browse'
import VehicleDetail from './pages/VehicleDetail'
import Favorites from './pages/Favorites'
import Compare from './pages/Compare'
import NotFound from './pages/NotFound'
import Sell from './pages/Sell'

function App() {
  return (
    <FavoritesProvider>
      <CompareProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/vehicles" element={<Browse />} />
              <Route path="/vehicle/:slug" element={<VehicleDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CompareProvider>
    </FavoritesProvider>
  )
}

export default App