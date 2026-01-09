import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedinUser } from "../../redux/feature/appSlice";

const Setting = () => {
  const { loggedinUser } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({
    name: loggedinUser?.name || "",
    username: loggedinUser?.username || "",
    email: loggedinUser?.email || "",
    phone: loggedinUser?.phone || "",
    bio: loggedinUser?.bio || "",
    language: loggedinUser?.language || "id",
    timezone: loggedinUser?.timezone || "Asia/Jakarta",
    notifications: true,
    theme: "light",
  });
  const [profileImage, setProfileImage] = useState(
    loggedinUser?.profileImage || null
  );
  const [imagePreview, setImagePreview] = useState(
    loggedinUser?.profileImage || null
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...loggedinUser,
      name: settings.name,
      username: settings.username,
      email: settings.email,
      phone: settings.phone,
      bio: settings.bio,
      language: settings.language,
      timezone: settings.timezone,
      profileImage: imagePreview,
    };
    dispatch(setLoggedinUser(updatedUser));
    localStorage.setItem("loggedinUser", JSON.stringify(updatedUser));
    alert("Pengaturan berhasil disimpan!");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: "0", fontSize: "2rem", fontWeight: "bold" }}>
            Pengaturan Akun
          </h2>
          <p style={{ margin: "10px 0 0", opacity: "0.9" }}>
            Kelola preferensi dan informasi akun Anda
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
          {/* Profile Image */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src={imagePreview || "https://via.placeholder.com/150"}
                alt="Profile"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #667eea",
                }}
              />
              <label
                htmlFor="profileImage"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "#667eea",
                  color: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                ✏️
              </label>
              <input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
            <p style={{ marginTop: "10px", color: "#666" }}>
              Klik ikon untuk mengubah foto profil
            </p>
          </div>

          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Username */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={settings.username}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              No HP
            </label>
            <input
              type="tel"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Bio */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Bio / Deskripsi Singkat
            </label>
            <textarea
              name="bio"
              value={settings.bio}
              onChange={handleChange}
              rows="4"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Language */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Bahasa
            </label>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Timezone */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Time Zone
            </label>
            <select
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="Asia/Jakarta">WIB (Asia/Jakarta)</option>
              <option value="Asia/Makassar">WITA (Asia/Makassar)</option>
              <option value="Asia/Jayapura">WIT (Asia/Jayapura)</option>
            </select>
          </div>

          {/* Notifications */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
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

          {/* Theme */}
          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Tema
            </label>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="light">Terang</option>
              <option value="dark">Gelap</option>
            </select>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Simpan Pengaturan
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "1rem",
  transition: "border-color 0.3s ease",
  boxSizing: "border-box",
};

const selectStyle = {
  ...inputStyle,
  background: "white",
};

const buttonStyle = {
  padding: "12px 24px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  width: "100%",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
  },
};

export default Setting;
