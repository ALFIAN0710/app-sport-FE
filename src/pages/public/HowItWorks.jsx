import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Daftar Akun",
      description:
        "Buat akun Anda dengan mudah dan cepat. Isi data diri dan mulai menggunakan platform kami.",
      icon: "👤",
    },
    {
      step: 2,
      title: "Cari Pemain",
      description:
        "Jelajahi database pemain berkualitas berdasarkan grade, lokasi, dan ketersediaan jadwal.",
      icon: "🔍",
    },
    {
      step: 3,
      title: "Pesan Pemain",
      description:
        "Pilih pemain yang sesuai dengan kebutuhan tim Anda dan lakukan pemesanan dengan mudah.",
      icon: "📅",
    },
    {
      step: 4,
      title: "Mainkan Pertandingan",
      description:
        "Nikmati pertandingan dengan pemain profesional yang telah Anda pesan. Raih kemenangan bersama!",
      icon: "⚽",
    },
  ];

  return (
    <div className="how-it-works">
      <h1>Cara Kerja Platform Kami</h1>
      <p className="subtitle">
        Temukan pemain futsal berkualitas dalam 4 langkah mudah
      </p>

      <div className="steps-container">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className={`step-card fade-in-up delay-${index + 1}`}
          >
            <div className="step-number">{item.step}</div>
            <div className="step-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Siap Memulai?</h2>
        <p>Yuk mulai petualangan futsal Anda dengan pemain terbaik!</p>
        <div className="cta-buttons">
          <a href="/register" className="btn btn-primary">
            Daftar Sekarang
          </a>
          <a href="/home" className="btn btn-ghost">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
