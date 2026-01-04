import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src={logo} alt="Futsal logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Beranda</Link>
          </li>
          <li>
            <Link to="/home/features">Fitur</Link>
          </li>
          <li>
            <Link to="/home/how-it-works">Cara Kerja</Link>
          </li>
          <li>
            <Link to="/home/contact">Kontak</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/register" className="btn btn-primary">
            Daftar
          </Link>
          <Link to="/login" className="btn btn-outline">
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
