import React from "react";
import { playersData } from "../../../helpers/playersData";

function Players({ onBooking }) {
  const handleBookPlayer = (player) => {
    // Simulasi pemesanan pemain dengan data dummy
    const booking = {
      namaTim: 'Tim Dummy',
      penanggungJawab: 'Dummy User',
      whatsapp: '08123456789',
      grade: player.rating, // Menggunakan rating sebagai grade
      tanggal: new Date().toISOString().split('T')[0],
      pemain: player.name
    };
    onBooking(booking);
    alert(`Pemesanan ${player.name} berhasil! Data disimpan secara lokal.`);
  };

  return (
    <section className="players">
      <h2>Pemain Tersedia</h2>
      <div className="players-grid">
        {playersData.map((player) => (
          <div className="player-card" key={player.id}>
            <img src={player.image} alt={player.name} style={{width: '100px', height: '100px', borderRadius: '50%'}} />
            <h4>{player.name}</h4>
            <p>Posisi: {player.position}</p>
            <p>Umur: {player.age}</p>
            <p>Rating: {player.rating}/10</p>
            <p>{player.description}</p>
            <button className="btn btn-primary" onClick={() => handleBookPlayer(player)}>Pesan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Players;