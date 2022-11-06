import { useEffect, useRef } from "react";
import Cursor from "../components/Cursor";

export default function Home() {
  let mediaRef = useRef(null);

  const mouseEnter = () => {
    mediaRef.style.transform = "scale(100%)";
  };
  const mouseLeave = () => {
    mediaRef.style.transform = "scale(0)";
  };

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      console.log(clientX, clientY);
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-inner-banner">
              <div className="hero-inner-col left"></div>
              <div className="hero-inner-col right">
                <div className="hero-inner-title">
                  <h1>We make it happen</h1>
                </div>
                <div className="hero-inner-links">
                  <div className="hero-inner-link-item">
                    <div className="hero-inner-link-item-padding"></div>
                    <a href="/">
                      {" "}
                      <span>Websites</span>
                    </a>
                  </div>
                  <div className="hero-inner-link-item">
                    <div className="hero-inner-link-item-padding"></div>
                    <a href="/">
                      {" "}
                      <span>Apps</span>
                    </a>
                  </div>
                  <div
                    className="hero-inner-link-item"
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  >
                    <div className="hero-inner-link-item-padding"></div>
                    <a href="/">
                      {" "}
                      <span>Branding</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-inner-footer">
            <div className="hero-inner-footer-text">
              <p>
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursor */}
      {/* <Cursor /> */}

      <div className="cursor">
        <div className="cursor-media" ref={(el) => (mediaRef = el)}>
          <video
            src="videos/websites.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="websites"
          />
          <video
            src="videos/apps.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="apps"
          />
          <video
            src="videos/branding.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="branding"
          />
        </div>
      </div>
    </main>
  );
}
