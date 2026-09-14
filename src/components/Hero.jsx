import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/vehicles?q=${encodeURIComponent(query)}`)
  }
  return (
    <section className="relative overflow-hidden" style={{ height: 440 }}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg,#2A2350 0%, #5C3A63 38%, #C9683E 72%, #E8A34C 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(10,12,16,.92), rgba(10,12,16,.72) 55%, rgba(10,12,16,.45))' }}
      />

      <div className="relative max-w-[1440px] mx-auto px-8 h-full flex items-center">
        <div style={{ maxWidth: 780 }}>
          <h1 className="font-display font-bold text-white" style={{ fontSize: 58, lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            Find Your Next Ride
          </h1>
          <p className="text-white/85 mt-4" style={{ fontSize: 19, lineHeight: 1.5 }}>
            Buy, sell, compare and discover vehicles across Nepal.
          </p>
                   <form onSubmit={handleSearch} className="mt-6 bg-white rounded-card p-[10px] flex flex-col sm:flex-row gap-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center flex-1 px-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6F76" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by brand, model or keyword"
                className="w-full px-3 py-3 text-sm outline-none bg-transparent placeholder:text-textfaint"
              />
            </div>
            <button type="submit" className="bg-accent hover:bg-accenthover transition text-white font-semibold text-sm rounded-btn px-[30px] py-[13px]">
              Search
            </button>
          </form>
                    <div className="mt-4 flex flex-wrap gap-2">
            {['Brand', 'Budget', 'Location', 'Vehicle Type'].map((label) => (
              <button
                key={label}
                className="text-white rounded-full font-medium text-[13.5px] px-4 py-[9px]"
                style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.18)' }}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/vehicles" className="bg-white text-ink font-semibold text-sm rounded-btn px-[22px] py-[13px] hover:bg-white/90 transition">
              Browse Vehicles
            </Link>
            <Link to="/sell" className="border border-white/35 text-white font-semibold text-sm rounded-btn px-[22px] py-[13px] hover:border-white/60 transition">
              Sell Your Vehicle
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Hero