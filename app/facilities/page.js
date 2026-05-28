export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Facilities & Instrumentation</h1>
        
        {/* Facility Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About Our Facility</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Since 1986, SIRFER has operated as a premier open-access facility providing stable isotope ratio analyses. 
                Our state-of-the-art laboratory is equipped with multiple isotope ratio mass spectrometers and infrared spectrometers 
                capable of providing both bulk and trace gas analyses.
              </p>
              <p>
                We are committed to providing high-quality sample preparation and analysis using the latest technology, 
                performed by expert research staff.
              </p>
            </div>
          </div>
          <div>
            <img 
              src="/images/facilities/dscn0613-orig_orig.jpg" 
              alt="SIRFER laboratory facility" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* New Facility */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">New Facility - Sutton Building</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 mb-4">
                After 3 decades in the Skaggs Biology Building, SIRFER is moving to a new state-of-the-art facility!
              </p>
              <div className="space-y-3 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p>Fredrick Albert Sutton Building, Room 155<br/>115 S 1460 E<br/>Salt Lake City, Utah 84112</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Space</h3>
                  <p>Over 3,000 square feet of laboratory and office space on the first floor</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Features</h3>
                  <p>Fully modern laboratory and office facilities designed for advanced isotope analysis</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/news/lab-design.png" 
                alt="Sutton Building laboratory design" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Instrumentation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Core Instrumentation</h2>
          
          <div className="space-y-8">
            {/* EA-IRMS System */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Elemental Analysis - IRMS (EA-IRMS)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Purpose</h4>
                  <p className="text-slate-700 mb-4">
                    Carbon, nitrogen, and sulfur isotope analysis of solid samples
                  </p>
                  <h4 className="font-semibold text-slate-800 mb-2">Equipment</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Finnigan Mat Delta+ Advantage IRMS</li>
                    <li>• Finnigan Mat Delta+ IRMS</li>
                    <li>• Carlo Erba CHN EA1110 Elemental Analyzer</li>
                    <li>• ThermoFinnigan Conflo III Interface</li>
                  </ul>
                </div>
                <img 
                  src="/images/equipment/ea-irms-detail.jpg" 
                  alt="EA-IRMS equipment detail" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Continuous Flow System */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Flow Isotope Ratio MS</h3>
              <div className="space-y-3 text-slate-700">
                <p>
                  High-precision measurement of H, O, C, N, and S isotopes in various sample types using continuous flow interfaces. 
                  Ideal for liquid water, gas, and combustion analyses.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Multiple IRMS systems for redundancy and high throughput</li>
                  <li>Automated sample introduction systems</li>
                  <li>Real-time data processing and quality control</li>
                </ul>
              </div>
            </div>

            {/* IR Spectrometry */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Isotope Ratio Infrared Spectrometry (IRIS)</h3>
              <div className="space-y-3 text-slate-700">
                <p>
                  High-precision measurement of H and O isotope ratios in water using infrared absorption spectroscopy. 
                  Excellent for large sample volumes and non-destructive analysis.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Rapid sample analysis (minutes per sample)</li>
                  <li>Minimal sample preparation</li>
                  <li>Perfect for large research programs and monitoring networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Summary */}
        <div className="bg-slate-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Laboratory Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Analysis Types</h3>
              <ul className="space-y-2">
                <li>✓ Bulk isotope ratios</li>
                <li>✓ Trace gas isotopes</li>
                <li>✓ Compound-specific isotopes</li>
                <li>✓ Multi-element analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Sample Processing</h3>
              <ul className="space-y-2">
                <li>✓ Grinding and preparation</li>
                <li>✓ USDA-approved handling</li>
                <li>✓ Quality assurance standards</li>
                <li>✓ Expert technician staff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}