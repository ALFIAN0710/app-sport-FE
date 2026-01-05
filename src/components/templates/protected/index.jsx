import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../layout/dashboard/DashboardSidebar";
import DashboardHeader from "../../layout/dashboard/DashboardHeader";
import '../../layout/dashboard/DashboardLayout.css'
const ProtectedTemplate = () => {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardHeader />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedTemplate;
