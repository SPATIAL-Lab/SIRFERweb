export default function NavBar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="font-bold">SIRFER</div>
        <div className="space-x-4">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/submit">Submit</a>
          <a href="/training">Training</a>
          <a href="/facilities">Facilities</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}