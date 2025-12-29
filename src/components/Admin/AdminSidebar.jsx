import { NavLink } from "react-router-dom";

const AdminSidebar = ({ onLogout }) => {
  return (
    <>
      {/* Desktop / Tablet vertical sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white rounded-lg p-4 shadow">
        <h2 className="text-lg font-bold text-indigo-700 mb-6">Realty Spotters</h2>

        <nav className="flex-1 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <span className="text-lg">📊</span>
            <span>Analytics</span>
          </NavLink>

          <NavLink
            to="/admin/inquiries"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <span className="text-lg">📩</span>
            <span>Inquiries</span>
          </NavLink>
        </nav>

        <button
          onClick={onLogout}
          className="mt-6 w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
        >
          Logout
        </button>
      </aside>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-2 shadow-lg flex items-center gap-3 z-50">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => `flex flex-col items-center text-xs px-3 py-1 ${isActive ? 'text-indigo-600' : 'text-gray-600'}`}
        >
          <span className="text-lg">📊</span>
          <span className="hidden sm:block">Analytics</span>
        </NavLink>

        <NavLink
          to="/admin/inquiries"
          className={({ isActive }) => `flex flex-col items-center text-xs px-3 py-1 ${isActive ? 'text-indigo-600' : 'text-gray-600'}`}
        >
          <span className="text-lg">📩</span>
          <span className="hidden sm:block">Inquiries</span>
        </NavLink>

        <button onClick={onLogout} className="text-red-600 px-2 py-1 text-sm">Logout</button>
      </div>
    </>
  );
};

export default AdminSidebar;
