import { useState } from "react";

const Pembayaran = () => {
  const [paymentData, setPaymentData] = useState({
    amount: "",
    method: "credit_card",
    description: "",
    proofImage: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "proofImage" && files && files[0]) {
      const file = files[0];
      setPaymentData((prev) => ({ ...prev, [name]: file }));
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPaymentData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Pembayaran sebesar Rp${paymentData.amount} dengan metode ${paymentData.method} berhasil diproses!`;
    if (paymentData.proofImage) {
      alert(`${message}\nBukti pembayaran: ${paymentData.proofImage.name}`);
    } else {
      alert(message);
    }
    setPaymentData({
      amount: "",
      method: "credit_card",
      description: "",
      proofImage: null,
    });
    setImagePreview(null);
  };

  return (
    <div>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Pembayaran</h2>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Kelola pembayaran dan transaksi Anda
      </p>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "400px" }}>
          <h3 style={{ color: "#333", marginBottom: "20px" }}>
            Form Pembayaran
          </h3>
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
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Jumlah Pembayaran (Rp):
              </label>
              <input
                type="number"
                name="amount"
                value={paymentData.amount}
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
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Metode Pembayaran:
              </label>
              <select
                name="method"
                value={paymentData.method}
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
                <option value="credit_card">Kartu Kredit</option>
                <option value="bank_transfer">Transfer Bank</option>
                <option value="e_wallet">E-Wallet</option>
              </select>
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
                Bukti Pembayaran:
              </label>
              <input
                type="file"
                name="proofImage"
                accept="image/*"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  background: "white",
                }}
              />
              {imagePreview && (
                <div style={{ marginTop: "15px", textAlign: "center" }}>
                  <p style={{ marginBottom: "10px", color: "#666" }}>
                    Preview Bukti Pembayaran:
                  </p>
                  <img
                    src={imagePreview}
                    alt="Bukti Pembayaran"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
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
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Bayar Sekarang
            </button>
          </form>
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3 style={{ color: "#333", marginBottom: "20px" }}>
            Riwayat Pembayaran
          </h3>
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
              textAlign: "center",
            }}
          >
            <div
              style={{ fontSize: "4rem", marginBottom: "20px", color: "#ccc" }}
            >
              📄
            </div>
            <p style={{ color: "#666", fontSize: "1.1rem" }}>
              Belum ada riwayat pembayaran.
            </p>
            <p style={{ color: "#999", fontSize: "0.9rem" }}>
              Transaksi Anda akan muncul di sini setelah pembayaran pertama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
