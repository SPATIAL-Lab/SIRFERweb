export default function Submit() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Submit Samples</h1>
        <p className="text-lg text-slate-600 mb-12">
          Follow these steps to submit your samples for isotope analysis at SIRFER.
        </p>

        {/* Overview */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Before You Begin</h2>
          <p className="text-slate-700">
            Please contact the SIRFER Lab Manager prior to submitting samples. This helps us prepare for your specific 
            analytical needs and ensure proper sample handling.
          </p>
          <p className="text-slate-700 mt-3">
            <strong>Contact:</strong> <a href="mailto:sirfer@utah.edu" className="text-blue-600 hover:underline">sirfer@utah.edu</a> or (801) 581-4654
          </p>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Sample Submission Process</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-grow border-l-2 border-slate-200 pl-6 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Contact & Planning</h3>
                <p className="text-slate-700 mb-4">
                  Contact SIRFER Lab Manager before preparing or shipping samples. This helps us understand your 
                  analytical needs and prepare the appropriate methods and materials.
                </p>
                <div className="bg-slate-100 p-4 rounded">
                  <p className="text-slate-800"><strong>What to mention:</strong></p>
                  <ul className="list-disc ml-6 text-slate-700 mt-2 space-y-1">
                    <li>Sample types you plan to submit</li>
                    <li>Requested analytical services</li>
                    <li>Any special requirements or concerns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-grow border-l-2 border-slate-200 pl-6 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Prepare Your Samples</h3>
                <p className="text-slate-700 mb-4">
                  Follow the preparation guidelines for your sample type. SIRFER can assist with some preparation steps.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-slate-100 p-4 rounded">
                    <p className="text-slate-800 font-semibold mb-2">Solid Samples (C, N, S Analysis)</p>
                    <ul className="list-disc ml-6 text-slate-700 space-y-1">
                      <li>Dry samples to constant weight</li>
                      <li>Grind to &lt;40 mesh (if not already prepared)</li>
                      <li>We can grind for nominal fee if preferred</li>
                      <li>Store in clean, labeled containers</li>
                    </ul>
                  </div>

                  <div className="bg-slate-100 p-4 rounded">
                    <p className="text-slate-800 font-semibold mb-2">Water Samples (H, O Analysis)</p>
                    <ul className="list-disc ml-6 text-slate-700 space-y-1">
                      <li>Collect in clean, sealed vials</li>
                      <li>Minimize air space in containers</li>
                      <li>Do not add preservatives</li>
                      <li>Keep samples cool during transport</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                    <p className="text-slate-800 font-semibold mb-2">⚠️ Special Samples</p>
                    <ul className="list-disc ml-6 text-slate-700 space-y-1">
                      <li><strong>USDA-regulated soils:</strong> Contact SIRFER manager before shipping</li>
                      <li><strong>Foreign plant samples:</strong> Require USDA permits (manager can advise)</li>
                      <li><strong>Isotopically enriched samples:</strong> Contact manager with label information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-grow border-l-2 border-slate-200 pl-6 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Prepare Sample ID List & Contact Info</h3>
                <p className="text-slate-700 mb-4">
                  Create a detailed list with sample information and contact details.
                </p>
                
                <div className="bg-slate-100 p-4 rounded mb-4">
                  <p className="text-slate-800 font-semibold mb-2">Sample ID List should include:</p>
                  <ul className="list-disc ml-6 text-slate-700 space-y-1">
                    <li>Sample IDs (max 10 characters, hyphens/underscores only)</li>
                    <li>Sample type/description</li>
                    <li>Requested analytical services</li>
                    <li>Number of samples</li>
                  </ul>
                </div>

                <div className="bg-slate-100 p-4 rounded">
                  <p className="text-slate-800 font-semibold mb-2">Contact Information for:</p>
                  <ul className="list-disc ml-6 text-slate-700 space-y-1">
                    <li>Billing/invoice recipient</li>
                    <li>Data report recipient</li>
                    <li>Return shipping (if requested)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-grow border-l-2 border-slate-200 pl-6 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ship Your Samples</h3>
                <p className="text-slate-700 mb-4">
                  Package and ship your samples with appropriate methods for your sample type.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-slate-100 p-4 rounded">
                    <p className="text-slate-800 font-semibold mb-2">Water Samples</p>
                    <ul className="list-disc ml-6 text-slate-700 space-y-1">
                      <li>Pack in Styrofoam or coolers</li>
                      <li>Use cooling pads or dry ice</li>
                      <li>Overnight or 2-day shipping preferred</li>
                    </ul>
                  </div>

                  <div className="bg-slate-100 p-4 rounded">
                    <p className="text-slate-800 font-semibold mb-2">Solid Samples</p>
                    <ul className="list-disc ml-6 text-slate-700 space-y-1">
                      <li>Any standard shipping container</li>
                      <li>Ensure samples are securely packaged</li>
                      <li>Standard ground shipping acceptable</li>
                    </ul>
                  </div>

                  <div className="bg-slate-100 p-4 rounded">
                    <p className="text-slate-800 font-semibold mb-2">Shipping Carriers</p>
                    <p className="text-slate-700">We accept shipments via: FedEx, UPS, USPS, DHL, or other carriers</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-slate-800"><strong>📦 Shipping Address</strong></p>
                    <p className="text-slate-700 mt-2">
                      Suvankar Chakraborty<br/>
                      SIRFER Lab Manager<br/>
                      Fredrick Albert Sutton Building, Rm 155<br/>
                      115 S 1460 E<br/>
                      Salt Lake City, Utah 84112<br/>
                      USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                  5
                </div>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Sample Information</h3>
                <p className="text-slate-700 mb-4">
                  When you ship your samples, send the sample ID list and contact information via email.
                </p>
                
                <div className="bg-slate-100 p-4 rounded">
                  <p className="text-slate-800"><strong>Send to:</strong></p>
                  <p className="text-slate-700 mt-2">
                    <a href="mailto:sirfer@utah.edu" className="text-blue-600 hover:underline">sirfer@utah.edu</a>
                  </p>
                  <p className="text-slate-800 font-semibold mt-4">Subject line suggestion:</strong></p>
                  <p className="text-slate-700 italic">"Sample Submission - [Your Name] - [Sample IDs]"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Information Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Sample Information Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Sample ID Format</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Maximum 10 characters</li>
                <li>✓ Use letters and numbers</li>
                <li>✓ Hyphens (-) and underscores (_) allowed</li>
                <li>✗ Avoid spaces or special characters</li>
              </ul>
              <p className="text-slate-600 text-sm mt-4">
                Examples: Sample-01, Core_3A, Soil001
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Sample Naming Tips</h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Use consistent naming scheme</li>
                <li>✓ Include location or sample type</li>
                <li>✓ Include date if relevant</li>
                <li>✓ Keep a master sample log</li>
              </ul>
              <p className="text-slate-600 text-sm mt-4">
                Your records are critical for your research!
              </p>
            </div>
          </div>
        </div>

        {/* After Submission */}
        <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">After Sample Submission</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900">Sample Analysis</h3>
              <p className="text-slate-700">
                SIRFER will process your samples and conduct the requested isotope analyses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Data Reporting</h3>
              <p className="text-slate-700">
                Results will be provided to the contact person specified in your submission. Reports include 
                isotope ratios, quality control measures, and data interpretation guidelines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Sample Archiving</h3>
              <p className="text-slate-700 mb-2">
                <strong>Important:</strong> SIRFER retains sample material for 2 months after the final report is delivered.
              </p>
              <ul className="list-disc ml-6 text-slate-700 space-y-1">
                <li>Reanalysis requests must be submitted within this 2-month window</li>
                <li>Return shipping requests must be made within this period</li>
                <li>After 2 months, remaining samples are disposed of following USDA protocols</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mt-4">
              <p className="text-yellow-900 text-sm">
                <strong>💡 Note:</strong> Contact the lab immediately if you need to make changes to your samples 
                or request return shipping within the 2-month archiving period.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions?</h2>
          <p className="text-slate-700 mb-6">
            Contact the SIRFER Lab Manager for any questions about sample submission or preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sirfer@utah.edu" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
            >
              Email SIRFER
            </a>
            <a 
              href="tel:+18015814654" 
              className="inline-block bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded transition"
            >
              Call (801) 581-4654
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}