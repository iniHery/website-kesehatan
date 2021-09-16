import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="hero">
      <nav className="desktop-nav">
        <a>Beranda</a>
        <a>Berita</a>
        <a>Kontak</a>
      </nav>

      <nav className="mobile-nav">
        <button onClick={() => setShowMobileNav(!showMobileNav)}>=</button>
        <div className={`mobile-nav-content ${showMobileNav ? "visible" : ""}`}>
          <a>Beranda</a>
          <a>Berita</a>
          <a>Kontak</a>
        </div>
      </nav>

      <div>
        <h1 className="hero-title">
          Pusat Informasi Kesehatan <br /> Provinsi Bali
        </h1>

        <div className="button-action-wrapper">
          <a className="button primary">Masuk</a>
          <a className="button outline">Daftar</a>
        </div>
      </div>
    </div>
  );
}
