import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

  const linkBase =
    "relative text-base font-semibold tracking-wide px-2 py-1 transition-all duration-200 rounded-md hover:bg-yellow-50 hover:scale-105";
  const linkActive =
    "text-yellow-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-yellow-400 after:rounded-full after:content-['']";
  const location = useLocation();

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
      style={{ background: "linear-gradient(90deg, #fffbe6 0%, #fff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <NavLink
            to="/"
            className="flex items-center justify-center"
            style={{ minHeight: 160, minWidth: 160 }}
          >
            <img
              src="/lo.png"
              alt="Realty Spotters"
              className="h-40 w-40 object-contain"
              style={{ minHeight: 160, maxHeight: 200 }}
            />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700"
                }`
              }
            >
              Recommendations
            </NavLink>

            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700"
                }`
              }
            >
              How it works
            </NavLink>

            <NavLink
              to="/inquiry"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? linkActive : "text-gray-700"
                }`
              }
            >
              Get Help
            </NavLink>

            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-semibold"
                    : "text-red-500 font-medium"
                }
              >
                Admin
              </NavLink>
            )}

            <NavLink
              to="/pricing"
              className="ml-2 inline-flex items-center px-3 py-1.5 bg-yellow-500 text-black text-base font-bold rounded-lg shadow hover:brightness-95 transition-all"
            >
              Unlock
            </NavLink>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-full bg-yellow-100 text-yellow-700 shadow hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-yellow-100 bg-white shadow transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg font-semibold ${
                isActive
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-gray-700 hover:bg-yellow-50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg font-semibold ${
                isActive
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-gray-700 hover:bg-yellow-50"
              }`
            }
          >
            Recommendations
          </NavLink>

          <NavLink
            to="/how-it-works"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg font-semibold ${
                isActive
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-gray-700 hover:bg-yellow-50"
              }`
            }
          >
            How it works
          </NavLink>

          <NavLink
            to="/inquiry"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg font-semibold ${
                isActive
                  ? "text-yellow-900 bg-yellow-400"
                  : "text-gray-700 hover:bg-yellow-100"
              }`
            }
          >
            Get Help
          </NavLink>

          {isAdmin && (
            <NavLink
              to="/admin"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2 rounded-md text-lg font-semibold bg-indigo-600 text-white text-center"
            >
              Admin
            </NavLink>
          )}

          <div className="mt-3 border-t border-yellow-100 pt-3">
            <NavLink
              to="/pricing"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-lg font-bold text-yellow-900 bg-yellow-200 hover:bg-yellow-300"
            >
              Pricing & Unlock
            </NavLink>
            <div className="mt-2 text-xs text-gray-500">
              No spam • Local insights • Fast results
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
