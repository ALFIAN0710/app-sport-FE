import { useSelector } from "react-redux";

const User = () => {
  const { loggedinUser } = useSelector((state) => state.app);

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Informasi User</h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Detail akun dan profil Anda
      </p>
      {loggedinUser ? (
        <div
          style={{
            background: "white",
            border: "1px solid #e0e0e0",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "500px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
              color: "white",
            }}
          >
            👤
          </div>
          <h3 style={{ color: "#333", marginBottom: "20px" }}>Detail Akun</h3>
          <div style={{ textAlign: "left", display: "grid", gap: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <strong style={{ color: "#555" }}>Nama:</strong>
              <span style={{ color: "#333" }}>{loggedinUser.name}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <strong style={{ color: "#555" }}>Email:</strong>
              <span style={{ color: "#333" }}>{loggedinUser.email}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <strong style={{ color: "#555" }}>Role:</strong>
              <span
                style={{
                  background: "#e8f5e8",
                  color: "#2e7d32",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                }}
              >
                Player
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <strong style={{ color: "#555" }}>Status:</strong>
              <span
                style={{
                  background: "#e8f5e8",
                  color: "#2e7d32",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                }}
              >
                Aktif
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          <div
            style={{ fontSize: "3rem", marginBottom: "20px", color: "#ccc" }}
          >
            ⚠️
          </div>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Data user tidak ditemukan.
          </p>
          <p style={{ color: "#999" }}>
            Silakan login kembali untuk melihat informasi akun.
          </p>
        </div>
      )}
    </div>
  );
};

export default User;
