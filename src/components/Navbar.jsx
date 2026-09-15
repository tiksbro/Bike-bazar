import { NavLink, Link } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  isActive ? 'text-white font-semibold' : 'text-[#C9CCD1] hover:text-white transition'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-ink">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center h-[72px] gap-8">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-8 h-8 rounded-[9px] bg-accent flex items-center justify-center text-white font-display font-bold text-base">
              B
            </span>
            <span className="font-display font-bold text-[19px] text-white">Bike Bazar</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-[26px] text-[14.5px]">
            <NavLink to="/" className={navLinkClass} end>
              Buy Vehicle
            </NavLink>
            <NavLink to="/sell" className={navLinkClass}>
              Sell
            </NavLink>
            <NavLink to="/compare" className={navLinkClass}>
              Compare
            </NavLink>
            <NavLink to="/dealers" className={navLinkClass}>
              Dealers
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/guides" className={navLinkClass}>
              Guides
            </NavLink>
          </nav>

          <Link
            to="/favorites"
            className="hidden md:inline-flex text-[14.5px] font-medium text-[#C9CCD1] hover:text-white transition ml-auto"
          >
            ♡ Favorites
          </Link>

          <Link
            to="/sell"
            className="inline-flex items-center bg-accent hover:bg-accenthover transition text-white font-semibold text-sm rounded-btn px-[18px] py-[11px] whitespace-nowrap"
          >
            Sell Your Vehicle
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar