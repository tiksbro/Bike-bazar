// This is a placeholder for now. In Phase 3, we'll turn our homepage
// design (hero, categories, featured bikes, trust band, etc.) into
// real components here.
   import Hero from '../components/Hero'
function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-16">
      <Hero />
      <h1 className="font-display font-bold text-3xl">Home page — coming in Phase 3</h1>
      <p className="text-textmuted mt-2">
        Routing works! This placeholder proves it. Next we'll build the real homepage here.
      </p>
    </div>
  )
}

export default Home
