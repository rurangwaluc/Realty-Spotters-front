import { NavLink } from "react-router-dom";

const AdminSidebar = ({ onLogout }) => {
  return (
    <>
      {/* Desktop / Tablet vertical sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white rounded-2xl p-5 shadow-lg border border-slate-200">
        <div className="flex items-center gap-2 mb-7">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-white text-2xl font-bold">🏢</span>
          <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">Realty Spotters</h2>
        </div>

        <nav className="flex-1 space-y-3">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                isActive ? "bg-slate-100 text-slate-800 shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <span className="text-xl">📊</span>
            <span>Analytics</span>
          </NavLink>

          <NavLink
            to="/admin/inquiries"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                isActive ? "bg-amber-50 text-amber-700 shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <span className="text-xl">📩</span>
            <span>Inquiries</span>
          </NavLink>
        </nav>

        <button
          onClick={onLogout}
          className="mt-8 w-full text-left px-4 py-3 text-base font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all"
        >
          <span className="inline-flex items-center gap-2"><span className="text-lg">🚪</span>Logout</span>
        </button>
      </aside>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-3 shadow-xl flex items-center gap-5 z-50 border border-slate-200">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => `flex flex-col items-center text-xs px-3 py-1 min-w-[56px] ${isActive ? 'text-slate-800 font-bold' : 'text-slate-600'}`}
        >
          <span className="text-xl">📊</span>
          <span className="hidden sm:block">Analytics</span>
        </NavLink>

        <NavLink
          to="/admin/inquiries"
          className={({ isActive }) => `flex flex-col items-center text-xs px-3 py-1 min-w-[56px] ${isActive ? 'text-amber-700 font-bold' : 'text-slate-600'}`}
        >
          <span className="text-xl">📩</span>
          <span className="hidden sm:block">Inquiries</span>
        </NavLink>

        <button onClick={onLogout} className="text-red-600 px-2 py-1 text-sm font-semibold flex flex-col items-center min-w-[56px]">
          <span className="text-lg">🚪</span>
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;
