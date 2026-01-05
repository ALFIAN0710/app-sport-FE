import { playersData } from "../../helpers/playersData";

const DaftarPemain = () => {
  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Daftar Pemain</h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Temukan pemain terbaik untuk tim Anda
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        {playersData.map((player) => (
          <div
            key={player.id}
            style={{
              background: "white",
              border: "1px solid #e0e0e0",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={player.image}
              alt={player.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
                border: "3px solid #667eea",
              }}
            />
            <h3 style={{ color: "#333", marginBottom: "10px" }}>
              {player.name}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "15px",
              }}
            >
              <span
                style={{
                  background: "#f0f0f0",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                {player.position}
              </span>
              <span
                style={{
                  background: "#f0f0f0",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                {player.age} tahun
              </span>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                {player.rating}/10
              </span>
            </div>
            <p
              style={{ color: "#666", lineHeight: "1.5", fontSize: "0.95rem" }}
            >
              {player.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarPemain;
