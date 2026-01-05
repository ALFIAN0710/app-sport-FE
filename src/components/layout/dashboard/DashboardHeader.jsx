import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/feature/appSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedinUser } = useSelector((state) => state.app);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="dashboard-header">
      <h1>Selamat Datang, {loggedinUser?.name || "User"}</h1>
      <button
        onClick={handleLogout}
        style={{
          marginLeft: "auto",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardHeader;
