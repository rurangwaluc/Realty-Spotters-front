import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  // TEMP: replace later with real auth / role check
  const isAdmin = false;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = "text-sm font-medium transition-colors";
  const linkActive = "text-yellow-500 font-semibold";

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Realty Spotters"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/logo.png";
              }}
            />
            <span className="hidden sm:inline-block text-lg font-bold text-gray-900">
              Realty <span className="text-yellow-500">Spotters</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              Recommendations
            </NavLink>

            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              How it works
            </NavLink>

            <NavLink
              to="/inquiry"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              Get Help
            </NavLink>

            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold" : "text-red-500 font-medium"
                }
              >
                Admin
              </NavLink>
            )}

            <NavLink to="/pricing" className="ml-3 inline-flex items-center px-3 py-1.5 bg-yellow-500 text-black text-sm font-semibold rounded-md hover:brightness-95">
              Unlock
            </NavLink>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden gap-2">
            <NavLink to="/search" className="p-2 rounded-md text-gray-700 hover:bg-gray-100" aria-label="Search">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm8-1-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </NavLink>

            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden border-t border-gray-100`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</NavLink>
          <NavLink to="/search" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Recommendations</NavLink>
          <NavLink to="/how-it-works" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">How it works</NavLink>
          <NavLink to="/inquiry" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-500 text-black text-center">Get Help</NavLink>

          {isAdmin && (
            <NavLink to="/admin" onClick={() => setOpen(false)} className="block mt-2 px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white text-center">Admin</NavLink>
          )}

          <div className="mt-3 border-t border-gray-100 pt-3">
            <NavLink to="/pricing" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Pricing & Unlock</NavLink>
            <div className="mt-2 text-xs text-gray-500">No spam • Local insights • Fast results</div>
          </div>
        </div>
      </div>
    </header>
  );
}
