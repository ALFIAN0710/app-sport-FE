import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedinUser } from "../../redux/feature/appSlice";

const Setting = () => {
  const { loggedinUser } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({
    name: loggedinUser?.name || "",
    email: loggedinUser?.email || "",
    notifications: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setLoggedinUser({
        ...loggedinUser,
        name: settings.name,
        email: settings.email,
      })
    );
    localStorage.setItem(
      "loggedinUser",
      JSON.stringify({
        ...loggedinUser,
        name: settings.name,
        email: settings.email,
      })
    );
    alert("Pengaturan berhasil disimpan!");
  };

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Pengaturan</h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Kelola preferensi dan informasi akun Anda
      </p>

      <div style={{ maxWidth: "500px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            border: "1px solid #e0e0e0",
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Nama:
            </label>
            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
                color: "#333",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                style={{ marginRight: "10px", transform: "scale(1.2)" }}
              />
              Aktifkan Notifikasi
            </label>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Tema:
            </label>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                background: "white",
              }}
            >
              <option value="light">Terang</option>
              <option value="dark">Gelap</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              padding: "12px 24px",
              background: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Simpan Pengaturan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
