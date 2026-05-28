export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Contact SIRFER</h1>
        <p className="text-lg text-slate-600 mb-12">
          Get in touch with SIRFER for sample submission, questions, or collaboration opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Contact Info */}
          <div>
            <img 
              src="/images/facilities/slide1-contact.jpeg" 
              alt="SIRFER facility entrance" 
              className="rounded-lg shadow-lg w-full h-auto mb-6"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            {/* Lab Manager / Shipping */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Laboratory Manager</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-slate-900">Suvankar Chakraborty, Ph.D.</h3>
                  <p className="text-slate-700">SIRFER Lab Manager</p>
                  <p className="text-slate-700">Shipping & Laboratory</p>
                </div>
                <div>
                  <p className="text-slate-900"><strong>Phone:</strong></p>
                  <a href="tel:+18015814654" className="text-blue-600 hover:underline">(801) 581-4654</a>
                </div>
                <div>
                  <p className="text-slate-900"><strong>Email:</strong></p>
                  <a href="mailto:sirfer@utah.edu" className="text-blue-600 hover:underline">sirfer@utah.edu</a>
                </div>
              </div>
            </div>

            {/* Administrative Contact */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Accounting & Payments</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-slate-900">Ming Li</h3>
                  <p className="text-slate-700">Accountant</p>
                </div>
                <div>
                  <p className="text-slate-900"><strong>Phone:</strong></p>
                  <a href="tel:+18015879542" className="text-blue-600 hover:underline">(801) 587-9542</a>
                </div>
                <div>
                  <p className="text-slate-900"><strong>Email:</strong></p>
                  <a href="mailto:ming.li@utah.edu" className="text-blue-600 hover:underline">ming.li@utah.edu</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Address */}
        <div className="bg-slate-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Mailing Address</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Laboratory Address</h3>
              <p className="text-slate-700">
                Fredrick Albert Sutton Building<br/>
                Room 155<br/>
                115 South 1460 East<br/>
                Salt Lake City, Utah 84112<br/>
                United States
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Administrative Office</h3>
              <p className="text-slate-700">
                257 South 1400 East<br/>
                Room 201<br/>
                Salt Lake City, Utah 84112<br/>
                United States
              </p>
            </div>
          </div>
        </div>

        {/* SIRFER Steering Committee */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">SIRFER Steering Committee</h2>
          <p className="text-slate-600 mb-8">
            SIRFER is directed by distinguished faculty from the Department of Geology & Geophysics and related departments.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gabriel Bowen */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900">Gabriel Bowen, Ph.D.</h3>
              <p className="text-blue-600 font-semibold">Professor & Director of SIRFER</p>
              <div className="mt-3 space-y-2 text-slate-700">
                <p><strong>Phone:</strong> (801) 585-7925</p>
                <p>
                  <strong>Email:</strong> <a href="mailto:gabe.bowen@utah.edu" className="text-blue-600 hover:underline">gabe.bowen@utah.edu</a>
                </p>
              </div>
            </div>

            {/* James Ehleringer */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900">James Ehleringer, Ph.D.</h3>
              <p className="text-blue-600 font-semibold">Distinguished Professor</p>
              <div className="mt-3 space-y-2 text-slate-700">
                <p><strong>Phone:</strong> (801) 581-7623</p>
                <p>
                  <strong>Email:</strong> <a href="mailto:jim.ehleringer@utah.edu" className="text-blue-600 hover:underline">jim.ehleringer@utah.edu</a>
                </p>
              </div>
            </div>

            {/* Thure Cerling */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900">Thure Cerling, Ph.D.</h3>
              <p className="text-blue-600 font-semibold">Distinguished Professor</p>
              <div className="mt-3 space-y-2 text-slate-700">
                <p><strong>Phone:</strong> (801) 581-5558</p>
                <p>
                  <strong>Email:</strong> <a href="mailto:thure.cerling@utah.edu" className="text-blue-600 hover:underline">thure.cerling@utah.edu</a>
                </p>
              </div>
            </div>

            {/* William Leavitt */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900">William Leavitt, Ph.D.</h3>
              <p className="text-blue-600 font-semibold">Associate Professor</p>
              <div className="mt-3 space-y-2 text-slate-700">
                <p>
                  <strong>Email:</strong> <a href="mailto:u6060774@utah.edu" className="text-blue-600 hover:underline">u6060774@utah.edu</a>
                </p>
              </div>
            </div>

            {/* Tyler Faith */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900">Tyler Faith</h3>
              <p className="text-blue-600 font-semibold">Associate Professor</p>
              <div className="mt-3 space-y-2 text-slate-700">
                <p>
                  <strong>Email:</strong> <a href="mailto:jfaith@nhmu.utah.edu" className="text-blue-600 hover:underline">jfaith@nhmu.utah.edu</a>
                </p>
              </div>
            </div>

            {/* Issaku Kohl */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-slate-900">Issaku Kohl, Ph.D.</h3>
              <p className="text-blue-600 font-semibold">Research Associate Professor</p>
              <div className="mt-3 space-y-2 text-slate-700">
                <p>
                  <strong>Email:</strong> <a href="mailto:u6060674@utah.edu" className="text-blue-600 hover:underline">u6060674@utah.edu</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-900 font-semibold mb-2">First Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-semibold mb-2">Last Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-900 font-semibold mb-2">Email *</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-slate-900 font-semibold mb-2">Message *</label>
              <textarea 
                required 
                rows="6"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-600"
                placeholder="Please describe your inquiry or question..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
            >
              Send Message
            </button>
            <p className="text-sm text-slate-600 mt-4">
              Or email directly: <a href="mailto:sirfer@utah.edu" className="text-blue-600 hover:underline">sirfer@utah.edu</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}