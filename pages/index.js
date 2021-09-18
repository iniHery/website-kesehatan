import { useState } from "react";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div>
      <section className="header">
        <div className="navigation">
          <div className="logo">
          <img src="/health-insurance.png" />
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
            <h1>Ayo</h1>
            <h6>Berbagi Vitamin!</h6>
            <p>
              KitaSehat adalah sharing gate yang membantu warga yang berada di
              daerah pedalaman mendapatkan vitamin.
            </p>
            <div className="btn-header">
              <button className="btn-daftar">Login</button>
            </div>
          </div>
          <div className="bg-img">
            <img src="/medicine.png" />
          </div>
        </div>
      </section>

      <section>
        <div className="brand">
          <img src="/brand4.jpg" />
          <img src="/brand1.jpg" />
          <img src="/brand7.jpg" />
          <img src="/brand6.jpg" />
          <img src="/brand9.jpg" />
        </div>
      </section>

      <section>
        <div className="features">
          <div className="heading-feature">
            <h1>
              Sharing Gate yang dibuat khusus untuk daerah pedalaman di
              Indonesia.
            </h1>
            <p>
              KitaSehat adalah sharing gate yang membantu komunitas terhubung
              dengan warga yang berada di daerah pedalaman di Indonesia, untuk
              menyalurkan bantuan vitamin
            </p>
          </div>
          <div className="wrapping-feature">
            <div className="content-feature">
              <div className="feature-img">
                <img src="/sharing.png" />
              </div>
              <div className="description-feature">
                <h2>Gathering Community</h2>
                <p>
                  Tempatnya para komunitas berkumpul dari berbagai kalangan
                  daerah untuk saling sharing seputaran vitamin dan lokasi warga
                  yang berada di daerah pedalaman sehingga mempermudah untuk
                  memberi bantuan untuk warga kita yang berada di pedalaman
                  mendapatkan vitamin.
                </p>
              </div>
            </div>
            <div className="content-feature">
              <div className="feature-img">
                <img src="/free.png" />
              </div>
              <div className="description-feature">
                <h2>Free</h2>
                <p>
                  Website ini gratis dan mudah untuk di akses sehingga siapaun
                  dapat mudah saat mengakses website ini
                </p>
              </div>
            </div>
            <div className="content-feature">
              <div className="feature-img">
                <img src="/headphones.png" />
              </div>
              <div className="description-feature">
                <h2>Pelayanan</h2>
                <p>
                  Kami memahami kebutuhan Anda untuk layanan yang responsif dan
                  tepat waktu terkait masalah pada saat membantu maupun meminta.
                  Tim kami siap membantu Anda melalui email, 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="solusi">
          <div className="heading-solusi">
            <h1>Solusi</h1>
            <p>
              Panduan untuk mempermudah anda jika ingin memberi bantuan maupun
              meminta bantuan.
            </p>
          </div>
          <div className="wrapping-solusi">
            <div className="content-solusi">
              <h1>Memberi Bantuan</h1>
              <div className="description-solusi">
                <img src="/helping.png" />
                <div className="title-solusi">
                  <p>
                    Dengan memberikan bantuan mu dengan satu vitamin bisa
                    menyelamatkan satu nyawa
                  </p>
                  <button style={{ backgroundColor: "#ee4755" }}>
                    Membantu
                  </button>
                </div>
              </div>
            </div>
            <div className="content-solusi">
              <h2>Meminta Bantuan</h2>
              <div className="description-solusi">
                <img src="/hand1.png" />
                <div className="title-solusi">
                  <p>
                    Dengan memberikan bantuan mu dengan satu vitamin bisa
                    menyelamatkan satu nyawa
                  </p>
                  <button>Membantu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="media-liput">
          <h1>Diliput oleh</h1>
          <div className="content-media">
            <img src="/berita6.png" />
            <img src="/berita7.png" />
            <img src="/berita8.png" />
            <img src="/berita2.png" />
            <img src="/berita5.png" />
          </div>
        </div>
      </section>

      <footer>
        <div className="main-footer">
          <div className="content-footer">
            <div className="logo-footer">
              <img src="/health-insurance.png" />
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
              <h5>Media Social</h5>
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
