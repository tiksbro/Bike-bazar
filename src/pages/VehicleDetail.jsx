import { useParams, Link } from 'react-router-dom'
import VehicleCard, { VehicleArt } from '../components/VehicleCard'
import { getVehicleBySlug, getSimilar } from '../services/vehicleService'

const artBackgrounds = {
  orange: 'linear-gradient(160deg,#FDECE0,#F6C79B)',
  blue: 'linear-gradient(160deg,#E7EDFB,#B9C8F0)',
  graphite: 'linear-gradient(160deg,#EDEEF0,#C7CACF)',
  teal: 'linear-gradient(160deg,#E1F4EE,#A9DCCB)',
}

const priceBadgeStyles = {
  good: { label: 'Good Price', color: '#12805C', bg: '#E3F3EC' },
  fair: { label: 'Fair Price', color: '#8A5A12', bg: '#FBF0DA' },
  high: { label: 'High Price', color: '#A23A2C', bg: '#FBE6E2' },
}

function VehicleDetail() {
  const { slug } = useParams()
  const vehicle = getVehicleBySlug(slug)

  if (!vehicle) {
    return (
      <div className="max-w-[1440px] mx-auto px-8 py-24 text-center">
        <h1 className="font-display font-bold text-2xl">Vehicle Not Found</h1>
        <p className="text-textmuted mt-2">This listing may have been removed or the link is incorrect.</p>
        <Link to="/vehicles" className="inline-flex mt-6 bg-accent hover:bg-accenthover transition text-white font-semibold text-sm rounded-btn px-5 py-3">
          Browse Other Vehicles
        </Link>
      </div>
    )
  }

  const priceBadge = priceBadgeStyles[vehicle.priceInsight]
  const similar = getSimilar(vehicle)

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-8">
      <Link to="/vehicles" className="text-sm text-accent font-semibold hover:underline">← Back to results</Link>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="relative rounded-card overflow-hidden h-[340px]" style={{ background: artBackgrounds[vehicle.artColor] }}>
          <VehicleArt type={vehicle.type} />
        </div>

        <div>
          <h1 className="font-display font-bold text-[28px]">{vehicle.brand} {vehicle.model}</h1>
          <p className="text-textmuted mt-1">
            {vehicle.year} · {vehicle.mileageKm.toLocaleString()} KM · {vehicle.engineCc}cc · {vehicle.fuelType}
          </p>
          <p className="text-textmuted">{vehicle.location}</p>

          <p className="font-display font-bold text-[32px] mt-4">
            Rs. {vehicle.price.toLocaleString('en-IN')}{' '}
            <span className="font-body font-normal text-sm text-textfaint">
              {vehicle.negotiable ? 'Negotiable' : 'Fixed'}
            </span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            {vehicle.verifiedSeller && (
              <span className="text-xs font-semibold text-success">✓ Verified Seller</span>
            )}
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-badge" style={{ color: priceBadge.color, background: priceBadge.bg }}>
              {priceBadge.label}
            </span>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="bg-accent hover:bg-accenthover transition text-white font-semibold text-sm rounded-btn px-6 py-3">
              Make an Offer
            </button>
            <button className="border border-bordercol font-semibold text-sm rounded-btn px-6 py-3">
              Contact Seller
            </button>
          </div>

          <div className="mt-8 border border-bordercol rounded-card p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-textfaint">Seller</p>
            <p className="font-semibold mt-1">
              {vehicle.verifiedSeller ? 'Verified Individual Seller' : 'Unverified Seller'}
            </p>
            <p className="text-sm text-textmuted mt-0.5">{vehicle.location}</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display font-bold text-xl">Specifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <Spec label="Brand" value={vehicle.brand} />
          <Spec label="Model" value={vehicle.model} />
          <Spec label="Year" value={vehicle.year} />
          <Spec label="KM Driven" value={vehicle.mileageKm.toLocaleString()} />
          <Spec label="Engine" value={vehicle.engineCc ? `${vehicle.engineCc}cc` : '—'} />
          <Spec label="Fuel Type" value={vehicle.fuelType} />
          <Spec label="Location" value={vehicle.location} />
          <Spec label="Type" value={vehicle.type === 'motorcycle' ? 'Motorcycle' : 'Scooter'} />
        </div>
      </div>

      {similar.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display font-bold text-xl">Similar Vehicles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {similar.map((v) => (
              <VehicleCard key={v.id} vehicle={v} variant="result" />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Spec({ label, value }) {
  return (
    <div className="border border-bordercol rounded-cardsm p-3">
      <p className="text-xs text-textfaint">{label}</p>
      <p className="font-semibold text-sm mt-0.5">{value}</p>
    </div>
  )
}

export default VehicleDetail