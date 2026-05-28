import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <Card title="Solid Analysis" text="Carbon & nitrogen isotopes" />
        <Card title="Water Isotopes" text="δ²H and δ¹⁸O analysis" />
        <Card title="Gas Analysis" text="Trace gas isotope measurements" />
      </section>
    </main>
  );
}