import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  // TEMP: replace later with real auth / role check
  const isAdmin = false;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLink =
    "text-sm font-medium transition-colors hover:text-yellow-500";

  const activeLink =
    "text-yellow-500 font-semibold";

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-lg font-bold text-gray-900"
        >
          Realty<span className="text-yellow-500">Spotters</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLink : baseLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? activeLink : baseLink
            }
          >
            Recommendations
          </NavLink>

          <NavLink
            to="/inquiry"
            className={({ isActive }) =>
              isActive ? activeLink : baseLink
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
        </div>
      </nav>
    </header>
  );
}
