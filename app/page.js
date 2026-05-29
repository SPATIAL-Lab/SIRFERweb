import Hero from "../components/Hero";
import Card from "../components/Card";


export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: "url('/images/facilities/dscn0613-orig_orig.jpg')"
    }}>
      <div className="bg-white/85">
        <Hero />
        <section className="py-16 max-w-6xl mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About SIRFER</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-slate-700 space-y-4">
                <p>
                  SIRFER provides H, C, N, O, and S stable isotope ratio analyses on both organic and inorganic samples. 
                  We serve investigators in anthropology, biology, chemistry, ecology, geology, and medicine.
                </p>
                <p>
                  SIRFER provides research support to the University of Utah community, and offers the same quality 
                  analytical services to those from outside the university.
                </p>
              </div>
              <div className="text-slate-700 space-y-4">
                <p>
                  We have a strong commitment to secondary, undergraduate, and graduate level training, ranging from 
                  one-on-one training for students who wish to conduct their own analyses to coursework support and 
                  outreach activities.
                </p>
                <p>
                  As a core facility of the University of Utah, SIRFER supports research across multiple disciplines 
                  and partners with national research networks including NEON.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Solid Analysis"
              text="H, O, C, N, and S Isotopes"
              description="Continuous Flow - IRMS (CF-IRMS) for precise isotope measurements in plant tissues, soils, sediments, and other solid materials. Ideal for understanding environmental history and sample provenance."
            />
            <Card
              title="Water Isotopes"
              text="Hydrogen & Oxygen Analysis"
              description="High-precision δ²H and δ¹⁸O measurements track source water, evaporation, and paleoclimate signals. Essential for hydrology, ecology, paleoclimate, and water cycling research."
            />
            <Card
              title="Gas Analysis"
              text="Trace Gas Isotope Measurements"
              description="Isotope ratio infrared spectrometry (IRIS) for bulk and trace gas analysis. Supports source attribution, reaction pathway identification, and atmospheric monitoring."
            />
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-bold mb-2">New Facility - Sutton Building</h3>
                <p className="text-slate-200 mb-3">
                  After 3 decades in the Skaggs Biology Building, SIRFER has relocated to a new state-of-the-art facility 
                  with over 3,000 square feet of laboratory and office space.
                </p>
                <a href="/facilities" className="text-blue-400 hover:text-blue-300">Learn more →</a>
              </div>
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-bold mb-2">NEON Partnership</h3>
                <p className="text-slate-200 mb-3">
                  SIRFER is celebrating 10+ years of supporting the National Ecological Observatory Network (NEON), 
                  and has expanded to become the primary contract lab for water, algal, and vegetation isotope analysis.
                </p>
                <a href="/services" className="text-blue-400 hover:text-blue-300">View our services →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Getting Started</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-blue-600 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">📋 Submit Samples</h3>
              <p className="text-slate-700 mb-4">
                Follow our simple 5-step process to submit your samples for isotope analysis.
              </p>
              <a href="/submit" className="text-blue-600 hover:text-blue-700 font-semibold">
                Get started →
              </a>
            </div>
            <div className="border-2 border-green-600 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">📚 Learn & Train</h3>
              <p className="text-slate-700 mb-4">
                Explore IsoCamp summer courses and other training opportunities in stable isotope analysis.
              </p>
              <a href="/training" className="text-green-600 hover:text-green-700 font-semibold">
                Explore training →
              </a>
            </div>
            <div className="border-2 border-purple-600 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">💬 Get in Touch</h3>
              <p className="text-slate-700 mb-4">
                Contact our team with questions about our services, facilities, or collaboration opportunities.
              </p>
              <a href="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
                Contact us →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}