"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="font-bold">SIRFER</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-slate-800 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/rates" className="hover:underline">Rates</Link>
          <Link href="/submit" className="hover:underline">Submit</Link>
          <Link href="/training" className="hover:underline">Training</Link>
          <Link href="/facilities" className="hover:underline">Facilities</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 space-y-1 px-2">
          <Link href="/services" className="block px-3 py-2 rounded-md text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/rates" className="block px-3 py-2 rounded-md text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Rates</Link>
          <Link href="/submit" className="block px-3 py-2 rounded-md text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Submit</Link>
          <Link href="/training" className="block px-3 py-2 rounded-md text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Training</Link>
          <Link href="/facilities" className="block px-3 py-2 rounded-md text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Facilities</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-white hover:bg-slate-800" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}