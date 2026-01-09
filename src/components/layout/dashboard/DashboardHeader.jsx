import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/feature/appSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedinUser } = useSelector((state) => state.app);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ margin: 0, color: "#333", fontSize: "1.5rem" }}>
        Selamat Datang, {loggedinUser?.name || "User"}
      </h1>
      <div style={{ position: "relative" }} ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          style={{
            padding: "10px 15px",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#5a67d8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#667eea")}
        >
          <span>Menu</span>
          <span
            style={{
              fontSize: "0.8rem",
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            ▼
          </span>
        </button>
        {dropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 1000,
              minWidth: "200px",
              animation: "fadeIn 0.2s ease",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "10px 0" }}>
              <li>
                <button
                  onClick={() => {
                    navigate("/protected/setting");
                    setDropdownOpen(false);
                  }}
                  style={dropdownItemStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  ⚙️ Pengaturan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    alert("Fitur ubah password akan segera hadir!");
                    setDropdownOpen(false);
                  }}
                  style={dropdownItemStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  🔒 Ubah Password
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    alert("Fitur tema akan segera hadir!");
                    setDropdownOpen(false);
                  }}
                  style={dropdownItemStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  🌙 Tema
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/protected/user");
                    setDropdownOpen(false);
                  }}
                  style={dropdownItemStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f5f5f5")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  👤 Profil
                </button>
              </li>
              <li
                style={{
                  borderTop: "1px solid #eee",
                  marginTop: "10px",
                  paddingTop: "10px",
                }}
              >
                <button
                  onClick={handleLogout}
                  style={{ ...dropdownItemStyle, color: "#f44336" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#ffebee")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  🚪 Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const dropdownItemStyle = {
  width: "100%",
  padding: "12px 20px",
  background: "none",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "1rem",
  color: "#333",
  transition: "background-color 0.2s ease",
};

export default DashboardHeader;
