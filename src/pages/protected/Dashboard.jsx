import { useSelector } from "react-redux";
import { featuresData } from "../../helpers/featuresData";

const Dashboard = () => {
  const { loggedinUser } = useSelector((state) => state.app);

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Dashboard</h2>
      <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
        Selamat datang, {loggedinUser?.name || "User"}!
      </p>

      <h3
        style={{
          color: "#333",
          marginBottom: "20px",
          borderBottom: "2px solid #667eea",
          paddingBottom: "10px",
        }}
      >
        Fitur Utama
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          marginBottom: "40px",
        }}
      >
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            style={{
              background: "white",
              border: "1px solid #e0e0e0",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
              {feature.icon}
            </div>
            <h4 style={{ color: "#333", marginBottom: "10px" }}>
              {feature.title}
            </h4>
            <p style={{ color: "#666", lineHeight: "1.5" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <h3
        style={{
          color: "#333",
          marginBottom: "20px",
          borderBottom: "2px solid #667eea",
          paddingBottom: "10px",
        }}
      >
        Statistik Cepat
      </h3>
      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "25px",
            borderRadius: "12px",
            flex: "1",
            minWidth: "200px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>Total Pemain</h4>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>6</p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            padding: "25px",
            borderRadius: "12px",
            flex: "1",
            minWidth: "200px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>Sesi Latihan</h4>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
            12
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "white",
            padding: "25px",
            borderRadius: "12px",
            flex: "1",
            minWidth: "200px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>Rating Rata-rata</h4>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
            8.7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
