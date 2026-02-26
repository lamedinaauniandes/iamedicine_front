import { useEffect } from "react";
import AOS from "aos";
// Si tu template YA trae el CSS de AOS, no importes esto:
// import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  

  return (
    <div>
      <section
        id="hero"
        className="hero carousel carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-item active">
          <div className="container">
            <div className="row justify-content-center gy-6">
              <div className="col-lg-5 col-md-8">
                {/* ✅ usa /img/... si está en public/img/... */}
                <img
                  src="/img/hero-carousel/hero-carousel-1.svg"
                  alt=""
                  className="img-fluid img"
                />
              </div>

              <div className="col-lg-9 text-center">
                <h2>
                  Welcome to Medicine <span>RAG</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>

                {/* ✅ si estás usando React Router, mejor Link */}
                <a href="/login" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container">
            <div className="row justify-content-center gy-6">
              <div className="col-lg-5 col-md-8">
                <img
                  src="/img/hero-carousel/hero-carousel-2.svg"
                  alt=""
                  className="img-fluid img"
                />
              </div>

              <div className="col-lg-9 text-center">
                <h2>At vero eos et accusamus</h2>
                <p>Nam libero tempore, cum soluta nobis est...</p>
                <a href="#featured-services" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <br />
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Architecto nobis eos vel nam quidem vitae...</p>
          </div>

          <div className="row gy-5">
            {/* ✅ te faltaba data-aos aquí si quieres animar */}
            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/Dr-YimyMedina2.jpg" className="img-fluid" alt="" />
                </div>

                <div className="member-info">
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="https://www.google.com/maps/place/Reumat%C3%B3logo.+Doctor+Yimy+F.+Medina,+MD.+Reumatolog%C3%ADa.+Artritis.+Enfermedades+Osteomusculares.+Alta+Calidad/@4.6845939,-74.0569992,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9aea5b9abd6b:0x2c80ed47eafb5c34!8m2!3d4.6845939!4d-74.0569992!16s%2Fg%2F11dxs_f16p?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D"><i className="bi bi-facebook" /></a>
                    <a href="https://www.instagram.com/dryimymedinareumatologo/"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                  <h4>Dr. Yimy Medina</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/JennySeveriche.jpg" className="img-fluid" alt="" />
                </div>

                <div className="member-info">
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                  <h4>Jenny Severiche</h4>
                  <span>Máxima y suprema Jefe <br /> El poder detrás del poder.</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="team-member">
                <div className="member-img">
                  <img src="/img/team/alejandromedina.jpg" className="img-fluid" alt="" />
                </div>

                <div className="member-info">
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                  <h4>L-Alejandro Medina</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
