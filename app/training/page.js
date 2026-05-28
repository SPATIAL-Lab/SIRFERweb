export default function Training() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Training & Education</h1>
        <p className="text-lg text-slate-600 mb-12">
          SIRFER provides comprehensive training in stable isotope analysis, from introductory coursework to advanced laboratory techniques.
        </p>

        <div className="space-y-12">
          {/* IsoCamp - Primary Program */}
          <div className="border-2 border-blue-600 rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-3xl font-bold">IsoCamp Summer Course</h2>
              <p className="text-blue-100 mt-2">Intensive training in stable isotope theory and practice</p>
            </div>
            
            <div className="p-8 space-y-6">
              <img 
                src="/images/programs/isocamp-group.jpg" 
                alt="IsoCamp student group in laboratory" 
                className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
              />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Course Overview</h3>
                  <p className="text-slate-700 mb-4">
                    IsoCamp provides intensive training in the fundamental environmental and biological theory underlying 
                    stable isotope fractionation processes across a broad spectrum of ecological and environmental applications.
                  </p>
                  <p className="text-slate-700 text-sm italic">
                    "I had an amazing experience attending IsoCamp. It will remain one of the most memorable experiences 
                    of my education and training." — IsoCamp Participant
                  </p>
                </div>
                
                <div className="bg-slate-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">✓</span>
                      <span>Small student-to-instructor ratio (9 students, 3 instructors, 1 technician)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">✓</span>
                      <span>Hands-on laboratory and field studies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">✓</span>
                      <span>Student-designed research projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">✓</span>
                      <span>Professional presentation skills development</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Lecture Topics</h3>
                <p className="text-slate-700 mb-4">
                  Daily lectures cover foundation principles, theory, processes, and applications of stable isotopes across multiple disciplines:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-slate-700">
                    <li>• Atmospheric Science</li>
                    <li>• Biology & Ecology</li>
                    <li>• Geology & Geochemistry</li>
                  </ul>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Hydrology</li>
                    <li>• Marine Sciences</li>
                    <li>• Ecosystem Science</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Laboratory Component</h3>
                <p className="text-slate-700 mb-3">
                  Students engage in short-term field and laboratory studies of their own design, guided by experienced faculty instructors.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-slate-700">
                  <li>Project design and hypothesis development</li>
                  <li>Sample preparation techniques</li>
                  <li>Isotope measurement using IRMS and peripherals</li>
                  <li>Data interpretation and analysis</li>
                  <li>Scientific communication and presentation</li>
                </ul>
                <p className="text-slate-700 mt-3">
                  <strong>Outcomes:</strong> Upon completion, students can collect, prepare, analyze, and interpret stable isotope results 
                  ranging from compound-specific to whole organism and ecosystem scales.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href="http://stableisotopes.utah.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
                >
                  Visit IsoCamp Website
                </a>
              </div>
            </div>
          </div>

          {/* University Coursework */}
          <div className="border rounded-lg p-8 bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">University Coursework</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Stable Isotope Biogeochemistry & Ecology</h3>
                <p className="text-slate-700 mt-2">
                  Semester-long courses offered by the Department of Geology & Geophysics covering stable isotope theory, 
                  applications, and laboratory techniques in biogeochemistry and ecology.
                </p>
              </div>
              <p className="text-slate-700">
                SIRFER staff provide instructional support and laboratory facilities for undergraduate and graduate coursework 
                throughout the academic year.
              </p>
            </div>
          </div>

          {/* Individual Training */}
          <div className="border rounded-lg p-8 bg-green-50">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Individual Training</h2>
            <p className="text-slate-700 mb-4">
              SIRFER offers one-on-one training for students and researchers who wish to conduct their own isotope analyses.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Personalized instruction in sample preparation</li>
              <li>Guidance on IRMS operation and technique</li>
              <li>Data interpretation and quality assurance</li>
              <li>Lab safety and best practices</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Contact us at <strong>sirfer@utah.edu</strong> to arrange training sessions.
            </p>
          </div>

          {/* Outreach & Education */}
          <div className="border rounded-lg p-8 bg-purple-50">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Outreach & Education</h2>
            <p className="text-slate-700 mb-4">
              SIRFER is committed to secondary and undergraduate level outreach, bringing the excitement of isotope science to diverse audiences.
            </p>
            <div className="space-y-3 text-slate-700">
              <p>
                <strong>Secondary Students:</strong> Hands-on demonstrations and measurements of isotopes in everyday items (food, water, etc.) 
                to inspire interest in environmental science.
              </p>
              <p>
                <strong>Undergraduate Programs:</strong> Students in organic gardening and other applied courses measure isotopes of foods 
                they grow to understand environmental signatures and biogeochemical cycling.
              </p>
              <p>
                Young minds learn the excitement of science by doing real, meaningful research—not just reading about it in textbooks.
              </p>
            </div>
          </div>

          {/* Lab Manual */}
          <div className="bg-blue-900 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">SIRFER/IsoCamp Lab Manual</h2>
            <p className="mb-4">
              Co-authored by SIRFER instructors and colleagues, this authoritative manual covers over 2 decades of proven 
              stable isotope field and laboratory techniques.
            </p>
            <div className="space-y-3">
              <p>
                <strong>Title:</strong> "Stable Isotope Biogeochemistry and Ecology: Laboratory Techniques and Applications"
              </p>
              <p>
                <strong>Available in:</strong> Paper and digital formats
              </p>
              <a 
                href="https://www.amazon.com/Stable-Isotope-Biogeochemistry-Ecology-Laboratory/dp/1973349086/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-900 font-bold py-2 px-4 rounded hover:bg-blue-50 transition mt-4"
              >
                Purchase on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}