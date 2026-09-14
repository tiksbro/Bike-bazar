import VehicleCard from './VehicleCard'
import { getFeatured } from '../services/vehicleService'

function FeaturedBikes() {
  const featured = getFeatured()

  return (
    <section className="max-w-[1440px] mx-auto px-8" style={{ marginTop: 52 }}>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display font-bold text-[26px]">Featured Bikes</h2>
          <p className="text-[13.5px] text-textmuted mt-1">Boosted listings from verified sellers and dealers.</p>
        </div>
        <a href="/vehicles" className="text-sm font-semibold text-accent hover:underline">View All →</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {featured.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} variant="featured" />
        ))}
      </div>
    </section>
  )
}

export default FeaturedBikes