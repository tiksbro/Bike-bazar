import { useState } from 'react'
import { getByIds } from '../services/vehicleService'

const initialPending = [
  { vehicleId: 'v5', status: 'pending' },
  { vehicleId: 'v11', status: 'pending' },
  { vehicleId: 'v17', status: 'pending' },
]

function Admin() {
  const [pending, setPending] = useState(initialPending)
  const vehicles = getByIds(pending.map((p) => p.vehicleId))

  function updateStatus(vehicleId, newStatus) {
    setPending(pending.map((p) => (p.vehicleId === vehicleId ? { ...p, status: newStatus } : p)))
  }

  const pendingCount = pending.filter((p) => p.status === 'pending').length

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-8">
      <h1 className="font-display font-bold text-[26px]">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <StatCard label="Users" value="12,450" />
        <StatCard label="Active Listings" value="4,820" />
        <StatCard label="Dealers" value="156" />
        <StatCard label="Pending Approvals" value={pendingCount} />
      </div>

      <div className="mt-10">
        <h2 className="font-display font-bold text-xl">Listing Moderation</h2>
        <div className="flex flex-col gap-3 mt-4">
          {pending.map((p) => {
            const vehicle = vehicles.find((v) => v.id === p.vehicleId)
            if (!vehicle) return null

            return (
              <div
                key={p.vehicleId}
                className="border border-bordercol rounded-card p-4 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <p className="font-display font-semibold">
                    {vehicle.brand} {vehicle.model}
                  </p>
                  <p className="text-sm text-textmuted">
                    Rs. {vehicle.price.toLocaleString('en-IN')} · {vehicle.location}
                  </p>
                </div>

                {p.status === 'pending' ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(p.vehicleId, 'approved')}
                      className="text-sm font-semibold px-3 py-1.5 rounded-btn bg-success text-white"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(p.vehicleId, 'rejected')}
                      className="text-sm font-semibold px-3 py-1.5 rounded-btn border border-bordercol"
                    >
                      Reject
                    </button>
                  </div>
                ) : (
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-badge ${
                      p.status === 'approved' ? 'text-success bg-successbg' : 'text-danger bg-dangerbg'
                    }`}
                  >
                    {p.status === 'approved' ? 'Approved' : 'Rejected'}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
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

export default Admin