import { useSelector } from "react-redux";

const User = () => {
  const { loggedinUser } = useSelector((state) => state.app);

  // Data dummy untuk daftar user
  const dummyUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Player",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Coach",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Player",
      status: "Tidak Aktif",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Admin",
      status: "Aktif",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Player",
      status: "Aktif",
    },
  ];

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Daftar User</h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Daftar semua user dalam sistem
      </p>
      <div
        style={{
          background: "white",
          border: "1px solid #e0e0e0",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "1rem",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                ID
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                Nama
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                Role
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid #e0e0e0",
                }}
              >
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "12px" }}>{user.id}</td>
                <td style={{ padding: "12px" }}>{user.name}</td>
                <td style={{ padding: "12px" }}>{user.email}</td>
                <td style={{ padding: "12px" }}>
                  <span
                    style={{
                      background:
                        user.role === "Admin"
                          ? "#ffebee"
                          : user.role === "Coach"
                          ? "#fff3e0"
                          : "#e8f5e8",
                      color:
                        user.role === "Admin"
                          ? "#c62828"
                          : user.role === "Coach"
                          ? "#ef6c00"
                          : "#2e7d32",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {user.role}
                  </span>
                </td>
                <td style={{ padding: "12px" }}>
                  <span
                    style={{
                      background:
                        user.status === "Aktif" ? "#e8f5e8" : "#ffebee",
                      color: user.status === "Aktif" ? "#2e7d32" : "#c62828",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {user.status}
                  </span>
                </td>
                <td style={{ padding: "12px" }}>
                  <button
                    style={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                    onClick={() => alert(`Edit user ${user.name}`)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: "#fe0000ff",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                    onClick={() => alert(`Edit user ${user.name}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
