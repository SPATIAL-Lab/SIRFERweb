export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Stable Isotope Analysis Services</h1>
        <p className="text-lg text-slate-600 mb-12">
          SIRFER provides stable isotope ratio analyses for H, C, N, O, and S on both organic and inorganic samples. 
          We serve investigators in anthropology, biology, chemistry, ecology, geology, and medicine.
        </p>

        <div className="space-y-12">
          {/* Carbon & Nitrogen Analysis */}
          <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Carbon & Nitrogen Analysis (EA-IRMS)</h2>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Method</h3>
                <p className="text-slate-700">
                  Elemental Analyzer (EA) coupled to Isotope Ratio Mass Spectrometer (IRMS) in continuous flow mode
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Measures</h3>
                <p className="text-slate-700">δ¹³C and δ¹⁵N ratios in organic and inorganic solids</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Sample Types</h3>
                <ul className="list-disc ml-6 text-slate-700 space-y-1">
                  <li>Plant tissues and organic materials</li>
                  <li>Soils and sediments</li>
                  <li>Food samples</li>
                  <li>Inorganic materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Sample Preparation Requirements</h3>
                <ul className="list-disc ml-6 text-slate-700 space-y-1">
                  <li>Dried and ground to &lt;40 mesh</li>
                  <li>Routine weighing: 0.2-20 mg in tin capsules</li>
                  <li>Samples weighed to 1 µg precision</li>
                  <li>SIRFER can grind samples for a nominal fee</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Special Capabilities</h3>
                <ul className="list-disc ml-6 text-slate-700 space-y-1">
                  <li>USDA/APHIS approved for regulated soils</li>
                  <li>Can process foreign plant samples with permits</li>
                  <li>Accepts isotopically enriched samples (contact manager)</li>
                </ul>
              </div>
              </div>
              <div className="lg:w-80 w-full">
                <img
                  src="/images/equipment/ea-irms-setup.jpg"
                  alt="EA-IRMS equipment setup"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Hydrogen & Oxygen Analysis */}
          <div className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Hydrogen & Oxygen Analysis (Water Isotopes)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Method</h3>
                <p className="text-slate-700">
                  Laser spectroscopy (IRIS) or continuous flow isotope ratio mass spectrometry (CF-IRMS)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Measures</h3>
                <p className="text-slate-700">δ²H and δ¹⁸O ratios of water</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Sample Types</h3>
                <ul className="list-disc ml-6 text-slate-700 space-y-1">
                  <li>Groundwater and surface water</li>
                  <li>Precipitation and snow</li>
                  <li>Beverages</li>
                  <li>Leaf water and organic water</li>
                  <li>Marine and estuarine samples</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Shipping Requirements</h3>
                <p className="text-slate-700">
                  Styrofoam containers or coolers with cooling pads or dry ice; overnight shipping preferred
                </p>
              </div>
            </div>
          </div>

          {/* Other Isotope Services */}
          <div className="border-l-4 border-purple-600 pl-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Additional Isotope Services</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Sulfur (S)</h3>
                <p className="text-slate-700">
                  Stable sulfur isotope analysis for sediments, minerals, and organic materials
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Bulk & Trace Gas Analysis</h3>
                <p className="text-slate-700">
                  Isotope ratio infrared spectrometry (IRIS) for bulk and trace gas measurements
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Compound-Specific Analysis</h3>
                <p className="text-slate-700">
                  Analysis of specific compounds within complex mixtures for detailed isotopic signatures
                </p>
              </div>
            </div>
          </div>

          {/* Lab Accreditation & Quality */}
          <div className="bg-slate-100 rounded-lg p-6 mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quality & Expertise</h2>
            <p className="text-slate-700 mb-4">
              Since 1986, SIRFER has operated as an open facility providing stable isotope ratio analyses with the latest technology 
              and expert research staff. We are committed to providing high-quality sample preparation and analysis in support of 
              science and management across a wide range of fields including anthropology, biology, chemistry, ecology, geology, and medicine.
            </p>
            <p className="text-slate-700">
              We serve the University of Utah community and also offer analytical services to researchers from outside the university.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}