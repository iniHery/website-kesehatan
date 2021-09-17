import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div>
      <section className="header">
        <div className="navigation">
          <div className="logo">
            <img src="/healthy.png" />
            <h1>KitaSehat</h1>
          </div>
          <div className="navbar">
            <a>Beranda</a>
            <a>Berita</a>
            <a>Informasi</a>
            <a>Kontak</a>
          </div>
          <nav className="mobile-nav">
            <button onClick={() => setShowMobileNav(!showMobileNav)}>
              <img src="/menu.png" />
            </button>
            <div
              className={`mobile-nav-content ${showMobileNav ? "visible" : ""}`}
            >
              <a>Beranda</a>
              <a>Berita</a>
              <a>Informasi</a>
              <a>Kontak</a>
            </div>
          </nav>
        </div>
        <div className="content-header">
          <div>
            <h1>Ayo Berbagi <span>Vitamin!</span></h1>
            <p>
              Inisiatif dari suatu comunitas untuk berbagi vitamin agar bisa
              membantu orang yang tinggal di daerah pedalaman.
            </p>
            <div className="btn-header">
              <button className="btn-daftar">Daftar</button>
            </div>
          </div>
          <div className="bg-img">
            <img src="/medicine.png" />
          </div>
        </div>
      </section>

      <section className="main">
        <div className="content-main">
          <form>
            <img className="img-main-left" src="/img.jpg" />
            <div className="title-main">
              <h1>Bagaimana Bisa?</h1>
              <p>
                Dengan cara mengulurkan bantuan, kamu bisa membantu saudara kita
                yang berada di daerah pedalaman
              </p>
              <button className="btn-memberi">Bantu</button>
            </div>
          </form>
        </div>
      </section>

      <section className="news">
        <div>
          <h1>Berita Terbaru</h1>
          <bottom></bottom>
        </div>
        <div className="content-news">
          <form>
            <img className="content-img" src="/img1.jpg" />
            <h3>
              <p>
                <span>detikHealth</span> 1 Sep 2021 08:00 WIB
              </p>
              Hati-hati Minum Vitamin D, Ini Bahaya Jika Dosisnya Terlalu
              Tinggi!
            </h3>
            <p>
              Vitamin D banyak dianjurkan selama pandemi COVID-19. Namun dokter
              mengingatkan untuk tidak terlalu percaya...
            </p>
          </form>
          <form>
            <img className="content-img" src="/img2.jpg" />
            <h3>
              <p>
                <span>detikFinance</span> 4 Sep 2021 19:00 WIB
              </p>
              Vitamin dan Makanan untuk Kuatkan Imun Lawan COVID-19
            </h3>
            <p>
              Ayo mencegah COVID-19 dengan menguatkan imun. Konsumsi vitamin
              berikut ini...
            </p>
          </form>
          <form>
            <img className="content-img" src="/img3.jpg" />
            <h3>
              <p>
                <span>detikEduRabu</span> 5 Sep 2021 21:00 WIB
              </p>
              Rekomendasi Obat dan Vitamin untuk Isolasi Mandiri Pasien Corona
            </h3>
            <p>
              Di tengah lonjakan kasus COVID-19, obat dan vitamin untuk isolasi
              mandiri pasien corona menjadi...
            </p>
          </form>
          <form>
            <img className="content-img" src="/img4.jpg" />
            <h3>
              <p>
                <span>detikHealth</span> 8 Sep 2021 09:00 WIB
              </p>
              2 Apotek di Cilandak Jaksel Kehabisan Stok Vitamin
            </h3>
            <p>
              Vitamin menjadi salah satu produk yang diburu masyarakat di DKI
              saat ini. Sayangnya, sejumlah apotek di...
            </p>
          </form>
          <form>
            <img className="content-img" src="/img5.jpg" />
            <h3>
              <p>
                <span>detikHealth</span> 10 Sep 2021 10:00 WITA
              </p>
              3 Suplemen Anak Ini Tak Disukai Padahal Penting
            </h3>
            <p>
              Sebagian besar suplemen untuk anak - anak dibuat rasa manis. Tapi
              ada pua yang tak disukai, padahal...
            </p>
          </form>
        </div>
      </section>

      <section>
        <div className="medicine">
          <div>
            <h1>Vitamin</h1>
            <p>
              Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan
              vitamin di sini
            </p>
          </div>
          <div className="main-medicine">
            <div className="content-medicine">
              <form>
                <img src="/virus.png" />
                <h4>COVID-19</h4>
              </form>
              <form>
                <img src="/pills.png" />
                <h4>JENIS-JENIS</h4>
              </form>
              <form>
                <img src="/speaker.png" />
                <h4>ATURAN</h4>
              </form>
            </div>
            <div className="content-medicine">
              <form>
                <img src="/book.png" />
                <h4>PANDUAN</h4>
              </form>
              <form>
                <img src="/anti-virus.png" />
                <h4>ANTI VIRUS</h4>
              </form>
              <form>
                <h3>LIHAT SEMUA</h3>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="main-footer">
          <div className="content-footer">
            <div className="logo-footer">
              <img src="/healthy.png" />
              <h1>KitaSehat</h1>
            </div>
            <div className="tittle-footer">
              <h5>Bekerjasama </h5>
              <p>Bali Berbagi</p>
              <p>Sehat Bersama</p>
              <p>Satu Hati</p>
              <p>Ketimbang Ngemis</p>
            </div>
            <div className="tittle-footer">
              <h5>Site Map</h5>
              <p>Blog</p>
              <p>Syarat & Ketentuan</p>
              <p>Security</p>
            </div>
            <div className="social-media">
              <h5>Call Center</h5>
              <div className="media-footer">
                <img src="/instagram.png" />
                <p>Instagram</p>
              </div>
              <div className="media-footer">
                <img src="/twitter.png" />
                <p>Twitter</p>
              </div>
              <div className="media-footer">
                <img src="/facebook.png" />
                <p>Facebook</p>
              </div>
              <div className="media-footer">
                <img src="/youtube.png" />
                <p>YouTube</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <h4>©KITASEHAT, 2021. ALL RIGHTS RESERVED</h4>
          <div className="media-footer">
            <img src="/oprator.png" />
            <p>1500451</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
