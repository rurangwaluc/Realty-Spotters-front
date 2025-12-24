import { NavLink } from "react-router-dom";

const AdminSidebar = ({ onLogout }) => {
  return (
    <aside className="admin-sidebar">
      <h2 className="logo">Realty Spotters</h2>

      <nav>
        <NavLink to="/admin/dashboard" className="nav-link">
          📊 Analytics
        </NavLink>

        <NavLink to="/admin/inquiries" className="nav-link">
          📩 Inquiries
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
