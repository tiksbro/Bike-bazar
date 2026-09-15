import { vehicles } from '../data/vehicles'

export function getFeatured() {
  return vehicles.filter((v) => v.featured)
}

export function listVehicles(filters = {}) {
  let results = vehicles

  if (filters.q) {
    const q = filters.q.toLowerCase()
    results = results.filter(
      (v) => v.brand.toLowerCase().includes(q) || v.model.toLowerCase().includes(q)
    )
  }
  if (filters.brand) {
    results = results.filter((v) => v.brand === filters.brand)
  }
  if (filters.type) {
    results = results.filter((v) => v.type === filters.type)
  }
  if (filters.location) {
    results = results.filter((v) => v.location === filters.location)
  }
  if (filters.minPrice) {
    results = results.filter((v) => v.price >= filters.minPrice)
  }
  if (filters.maxPrice) {
    results = results.filter((v) => v.price <= filters.maxPrice)
  }

  if (filters.sortBy === 'priceLowHigh') {
    results = [...results].sort((a, b) => a.price - b.price)
  } else if (filters.sortBy === 'priceHighLow') {
    results = [...results].sort((a, b) => b.price - a.price)
  } else if (filters.sortBy === 'lowestKm') {
    results = [...results].sort((a, b) => a.mileageKm - b.mileageKm)
  }

  return results
}

export function getVehicleBySlug(slug) {
  return vehicles.find((v) => v.slug === slug)
}
export function getByIds(ids) {
  return vehicles.filter((v) => ids.includes(v.id))
}

export function getSimilar(vehicle, limit = 3) {
  return vehicles
    .filter((v) => v.id !== vehicle.id && (v.brand === vehicle.brand || v.type === vehicle.type))
    .slice(0, limit)
}