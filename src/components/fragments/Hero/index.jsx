import React, { useState } from "react";

function Hero({ onBooking }) {
  const [formData, setFormData] = useState({
    namaTim: '',
    penanggungJawab: '',
    whatsapp: '',
    grade: 'Grade A',
    tanggal: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan booking dengan data dummy
    onBooking(formData);
    alert('Pemesanan berhasil! Data disimpan secara lokal.');
    setFormData({
      namaTim: '',
      penanggungJawab: '',
      whatsapp: '',
      grade: 'Grade A',
      tanggal: ''
    });
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Mudah menemukan pemain futsal berkualitas</h1>
          <p>
            Cari, pilih, dan pesan pemain berdasarkan grade dan ketersediaan.
            Kelola tim Anda dengan rapi dan cepat.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#form">Pesan Sekarang</a>
            <a className="btn btn-ghost" href="#features">Lihat Fitur</a>
          </div>
        </div>

        <aside className="hero-card" id="form">
          <h3>Pesan Pemain</h3>
          <form onSubmit={handleSubmit}>
            <label>Nama Tim</label>
            <input name="namaTim" value={formData.namaTim} onChange={handleChange} placeholder="Nama tim" required />

            <label>Penanggung Jawab</label>
            <input name="penanggungJawab" value={formData.penanggungJawab} onChange={handleChange} placeholder="Nama penanggung jawab" required />

            <label>WhatsApp</label>
            <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="08xxxxxxxxxx" required />

            <label>Grade Pemain</label>
            <select name="grade" value={formData.grade} onChange={handleChange}>
              <option>Grade A</option>
              <option>Grade B</option>
              <option>Grade C</option>
            </select>

            <label>Tanggal</label>
            <input name="tanggal" value={formData.tanggal} onChange={handleChange} type="date" required />

            <button type="submit" className="btn btn-primary full">Pesan Sekarang</button>
          </form>
        </aside>
      </div>
    </section>
  );
}

export default Hero;