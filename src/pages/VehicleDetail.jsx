import { useParams } from 'react-router-dom'

// Placeholder. Phase 6 will build the gallery, specs, price insight and
// seller card here. useParams() reads the ":slug" part of the URL —
// e.g. for /vehicle/yamaha-r15-v3-2022, slug will be "yamaha-r15-v3-2022".
function VehicleDetail() {
  const { slug } = useParams()

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-16">
      <h1 className="font-display font-bold text-3xl">Vehicle Detail — coming in Phase 6</h1>
      <p className="text-textmuted mt-2">
        URL routing works — this page is showing details for: <code>{slug}</code>
      </p>
    </div>
  )
}

export default VehicleDetail
