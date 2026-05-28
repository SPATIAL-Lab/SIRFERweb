export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20 text-center">
      <h1 className="text-4xl font-bold">Stable Isotope Ratio Facility for Environmental Research</h1>
      <p className="mt-4">Supporting research through advanced isotope analysis</p>
      <div className="mt-6 space-x-4">
        <a href="/submit" className="btn-primary">Submit Samples</a>
        <a href="/services" className="btn-secondary">Services</a>
      </div>
    </section>
  );
}