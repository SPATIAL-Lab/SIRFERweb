const DATA = [
  {
    title: "U of U Rate per sample",
    isotope: {
      cols: ["Method", "1-200", "200+"],
      rows: [
        ["", "$9.00", "$9.00", "Atmospheric carbon dioxide (min 150 samples)"],
        ["", "$9.00", "$9.00", "Gas Bench/C&O, inorganic matter"],
        ["", "$7.50", "$7.50", "Carbon and nitrogen, organic*"],
        ["", "$7.50", "$7.50", "Carbon and nitrogen, soils*"],
        ["CRDS", "$5.66", "$5.66", "Hydrogen and oxygen, water"],
        ["TC/EA", "$17.00", "$17.00", "Hydrogen and oxygen, organic/water"],
        ["", "$10.00", "$10.00", "Sulfur, organic solid"],
        ["", "$10.00", "$10.00", "Sulfur, organic soils"],
      ],
    },
    services: [
      ["Grind sample", "$2.00"],
      ["Weigh sample", "$2.00"],
      ["Solvent wash hair", "$2.67"],
      ["Water extraction, cryogenic", "$7.00"],
      ["Carbonate removal from soil", "$5.00"],
      ["Filter water samples and sample prep", "$2.00"],
      ["Water sample prep", "$1.00"],
      ["Hydroxyapatite pre-treatment", "$4.00"],
    ],
  },
  {
    title: "Academic Institutions and Government rate, per sample",
    isotope: {
      cols: ["Method", "1-200", "200+"],
      rows: [
        ["", "$15.35", "$13.82", "Atmospheric carbon dioxide (min 150 samples)"],
        ["", "$15.35", "$13.82", "Gas Bench/C&O, inorganic matter"],
        ["", "$12.79", "$11.51", "Carbon and nitrogen, organic"],
        ["", "$12.79", "$11.51", "Carbon and nitrogen, soils"],
        ["CRDS", "$9.65", "$8.69", "Hydrogen and oxygen, water"],
        ["TC/EA", "$29.00", "$26.10", "Hydrogen and oxygen, organic/water"],
        ["", "$20.00", "$18.00", "Sulfur, organic solid"],
        ["", "$25.00", "$22.50", "Sulfur, organic soils"],
      ],
    },
    services: [
      ["Grind sample", "$3.05"],
      ["Weigh sample", "$3.05"],
      ["Solvent wash hair", "$4.07"],
      ["Water extraction, cryogenic", "$10.68"],
      ["Carbonate removal from soil", "$7.63"],
      ["Filter water samples and sample prep", "$3.05"],
      ["Water sample prep", "$1.53"],
      ["Hydroxyapatite pre-treatment", "$6.10"],
    ],
  },
  {
    title: "Commercial rate, per sample",
    isotope: {
      cols: ["Method", "1-25", "26-99", "100-499", "500-999", "1000+"],
      rows: [
        ["", "$40.50", "$33.75", "$27.00", "$20.25", "$13.95", "Atmospheric carbon dioxide (min 150 samples)"],
        ["", "$40.50", "$33.75", "$27.00", "$20.25", "$13.95", "Gas Bench/C&O, inorganic matter"],
        ["", "$33.75", "$28.13", "$22.50", "$16.88", "$11.63", "Carbon and nitrogen, organic"],
        ["", "$33.75", "$28.13", "$22.50", "$16.88", "$11.63", "Carbon and nitrogen, soils"],
        ["CRDS", "$25.47", "$21.23", "$16.98", "$12.74", "$8.77", "Hydrogen and oxygen, water"],
        ["TC/EA", "$76.50", "$63.75", "$51.00", "$38.25", "$26.35", "Hydrogen and oxygen, organic/water"],
        ["", "$45.00", "$37.50", "$30.00", "$22.50", "$15.50", "Sulfur, organic solid"],
        ["", "$45.00", "$37.50", "$30.00", "$22.50", "$15.50", "Sulfur, organic soils"],
      ],
    },
    services: [
      ["Grind sample", "$3.05"],
      ["Weigh sample", "$3.05"],
      ["Solvent wash hair", "$4.07"],
      ["Water extraction, cryogenic", "$10.68"],
      ["Carbonate removal from soil", "$7.75"],
      ["Filter water samples and sample prep", "$3.02"],
      ["Water sample prep", "$1.51"],
      ["Hydroxyapatite pre-treatment", "$6.10"],
    ],
  },
];

function PricesTable({ title, isotope, services }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Isotope analysis</th>
              {isotope.cols.map((c, i) => (
                <th key={i} className="px-4 py-2 text-right text-sm font-semibold text-slate-700">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {isotope.rows.map((r, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 text-sm text-slate-700">{r[r.length - 1]}</td>
                {r.slice(0, r.length - 1).map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-sm text-right text-slate-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Services</th>
              <th className="px-4 py-2 text-right text-sm font-semibold text-slate-700">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {services.map((s, i) => (
              <tr key={i}>
                <td className="px-4 py-3 text-sm text-slate-700">{s[0]}</td>
                <td className="px-4 py-3 text-sm text-right text-slate-700">{s[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Rates() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Rates</h1>
        <p className="text-lg text-slate-600 mb-6">
          This page mirrors the content from the original SIRFER rates page. Below are the structured per-sample prices converted from the published table.
        </p>

        <div className="space-y-12">
          <div className="prose max-w-none">
            <p>
              Customers who will be loading their own samples into capsules can use the
              <a className="text-blue-600 underline" href="https://sirfer.utah.edu/uploads/6/1/9/7/61979799/irms_weighguide.xls"> weigh guide (Excel)</a> as a guide to find their target weight. Contact the SIRFER manager at <a className="text-blue-600 underline" href="mailto:sirfer@utah.edu">sirfer@utah.edu</a> for confirmation.
            </p>
            <p className="text-sm text-slate-600">All isotope analyses above include % element composition estimates, as appropriate.</p>
          </div>

          {DATA.map((d, i) => (
            <PricesTable key={i} title={d.title} isotope={d.isotope} services={d.services} />
          ))}

          <div className="text-sm text-slate-600">
            <p>* For these samples, we require a prior estimate of the C, N, and/or S content prior to analysis. Customers are responsible for providing this information.</p>
            <p>Rush jobs: If a researcher needs accelerated analysis, a surcharge of 100% will be added to the rate/sample listed above.</p>
            <p>Effective on new jobs received after July 1st, 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
