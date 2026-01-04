import React, { useState } from "react";
import Toast from "../../components/shared/Toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormData({ name: "", email: "", subject: "", message: "" });
      showToast(
        "Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.",
        "success"
      );
    } catch (error) {
      showToast("Terjadi kesalahan. Silakan coba lagi.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "support@sportapp.com",
      description: "Kirim email untuk pertanyaan umum",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      description: "Hubungi kami via WhatsApp",
    },
    {
      icon: "📍",
      title: "Alamat",
      content: "Jakarta, Indonesia",
      description: "Kunjungi kantor kami",
    },
  ];

  return (
    <div className="contact">
      <h1>Hubungi Kami</h1>
      <p className="subtitle">Ada pertanyaan? Kami siap membantu Anda</p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Informasi Kontak</h2>
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <h4>{info.title}</h4>
                  <p className="info-main">{info.content}</p>
                  <p className="info-desc">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h2>Kirim Pesan</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan email Anda"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subjek pesan"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tulis pesan Anda di sini..."
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {toast && (
              <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
