import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/protected/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/protected/user">User</Link>
        </li>
        <li>
          <Link to="/protected/daftar-pemain">Daftar Pemain</Link>
        </li>
        <li>
          <Link to="/protected/pembayaran">Pembayaran</Link>
        </li>
        <li>
          <Link to="/protected/setting">Setting</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
