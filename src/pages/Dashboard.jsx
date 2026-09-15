import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getByIds } from '../services/vehicleService'

const initialListings = [
  { vehicleId: 'v1', views: 432, messages: 12, favorites: 18, status: 'active' },
  { vehicleId: 'v9', views: 210, messages: 5, favorites: 7, status: 'active' },
  { vehicleId: 'v14', views: 98, messages: 2, favorites: 3, status: 'paused' },
]

function Dashboard() {
  const [listings, setListings] = useState(initialListings)
  const vehicles = getByIds(listings.map((l) => l.vehicleId))

  function updateStatus(vehicleId, newStatus) {
    setListings(
      listings.map((l) => (l.vehicleId === vehicleId ? { ...l, status: newStatus } : l))
    )
  }

  const activeCount = listings.filter((l) => l.status === 'active').length
  const totalViews = listings.reduce((sum, l) => sum + l.views, 0)
  const totalFavorites = listings.reduce((sum, l) => sum + l.favorites, 0)
  const totalMessages = listings.reduce((sum, l) => sum + l.messages, 0)

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-8">
      <h1 className="font-display font-bold text-[26px]">Seller Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <StatCard label="Active Listings" value={activeCount} />
        <StatCard label="Total Views" value={totalViews.toLocaleString()} />
        <StatCard label="Favorites" value={totalFavorites} />
        <StatCard label="Messages" value={totalMessages} />
      </div>

      <div className="mt-10">
        <h2 className="font-display font-bold text-xl">Your Listings</h2>
        <div className="flex flex-col gap-3 mt-4">
          {listings.map((listing) => {
            const vehicle = vehicles.find((v) => v.id === listing.vehicleId)
            if (!vehicle) return null

            return (
              <div
                key={listing.vehicleId}
                className="border border-bordercol rounded-card p-4 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <p className="font-display font-semibold">
                    {vehicle.brand} {vehicle.model}
                  </p>
                  <p className="text-sm text-textmuted">Rs. {vehicle.price.toLocaleString('en-IN')}</p>
                  <StatusBadge status={listing.status} />
                </div>

                <div className="flex gap-4 text-sm text-textmuted">
                  <span>{listing.views} views</span>
                  <span>{listing.messages} messages</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/vehicle/${vehicle.slug}`}
                    className="text-sm font-semibold px-3 py-1.5 rounded-btn border border-bordercol"
                  >
                    View
                  </Link>
                  {listing.status !== 'sold' && (
                    <button
                      onClick={() =>
                        updateStatus(listing.vehicleId, listing.status === 'active' ? 'paused' : 'active')
                      }
                      className="text-sm font-semibold px-3 py-1.5 rounded-btn border border-bordercol"
                    >
                      {listing.status === 'active' ? 'Pause' : 'Activate'}
                    </button>
                  )}
                  {listing.status !== 'sold' && (
                    <button
                      onClick={() => updateStatus(listing.vehicleId, 'sold')}
                      className="text-sm font-semibold px-3 py-1.5 rounded-btn bg-ink text-white"
                    >
                      Mark Sold
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const statusStyles = {
  active: { label: 'Active', color: 'text-success', bg: 'bg-successbg' },
  paused: { label: 'Paused', color: 'text-warning', bg: 'bg-warningbg' },
  sold: { label: 'Sold', color: 'text-neutralbadge', bg: 'bg-neutralbadgebg' },
}

function StatusBadge({ status }) {
  const s = statusStyles[status]
  return (
    <span className={`inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded-badge ${s.color} ${s.bg}`}>
      {s.label}
    </span>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="border border-bordercol rounded-card p-4">
      <p className="text-xs text-textfaint">{label}</p>
      <p className="font-display font-bold text-2xl mt-1">{value}</p>
    </div>
  )
}

export default Dashboard