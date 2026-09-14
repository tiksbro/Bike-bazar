import { vehicles } from '../data/vehicles'

export function getFeatured() {
  return vehicles.filter((v) => v.featured)
}