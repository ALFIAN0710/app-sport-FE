import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nama minimal 2 karakter";
    }

    if (!formData.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password wajib diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulasi register
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Registrasi berhasil! Silakan login dengan akun Anda. (Simulasi)");
      // Redirect to login
    } catch (error) {
      setErrors({ general: "Terjadi kesalahan. Silakan coba lagi." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register">
      <h1>Buat Akun Baru</h1>
      <form onSubmit={handleSubmit}>
        {errors.general && (
          <div className="error-message general">{errors.general}</div>
        )}

        <div>
          <label htmlFor="name">Nama Lengkap:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
            placeholder="Masukkan nama lengkap"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            placeholder="Masukkan email Anda"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
            placeholder="Minimal 6 karakter"
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">Konfirmasi Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error" : ""}
            placeholder="Ulangi password"
          />
          {errors.confirmPassword && (
            <span className="error-text">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoadingSpinner size="small" color="white" />
              Mendaftarkan...
            </>
          ) : (
            "Daftar"
          )}
        </button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Masuk di sini</Link>
      </p>
    </div>
  );
};

export default Register;
