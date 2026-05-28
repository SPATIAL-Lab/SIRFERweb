import Hero from "../components/Hero";
import Card from "../components/Card";


export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: "url('https://wallpaperaccess.com/full/5748694.png')"
    }}>
      <div className="bg-white/80">
        <Hero />
        <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Card
            title="Solid Analysis"
            text="Carbon, nitrogen, sulfur, hydrogen, and oxygen isotopes"
            description="Quantitative isotope ratios in solid samples reveal provenance, diagenesis, and environmental history."
          />
          <Card
            title="Water Isotopes"
            text="δ²H and δ¹⁸O analysis"
            description="Hydrogen and oxygen isotope ratios track source water, evaporation, and paleoclimate signals."
          />
          <Card
            title="Gas Analysis"
            text="Trace gas isotope measurements"
            description="Trace gas isotope data supports source attribution, reaction pathways, and atmospheric monitoring."
          />
        </section>
      </div>
    </main>
  );
}