import { useEffect, useRef } from "react";
import Cursor from "../components/Cursor";
import gsap from "gsap";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState();

  let videoRefs = useRef([]);
  const addVideoRef = (ref) => {
    if (ref) {
      videoRefs.current.push(ref);
    }
  };

  let mediaRef = useRef(null);

  useEffect(() => {
    // mediaRef.current.style.transform = `translate3d(${innerWidth / 2}px, ${
    //   innerHeight / 2
    // }px, 0)`;
    // videoRefs.current.forEach((ref) => (ref.style.transform = "scale(0)"));
    const onMove = ({ clientX, clientY }) => {
      mediaRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      // cursorRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // useEffect(() => {
  //   if (mediaRef.current && videoPlaying) {
  //     mediaRef.current.children[videoPlaying].style.display = "block";
  //   }
  // }, [videoPlaying]);

  const mouseEnter = (index) => {
    // mediaRef.style.transform = "scale(100%)";
    document.querySelector(".cursor").classList.add("media-blend");
    gsap.fromTo(
      videoRefs.current[index],
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  };
  const mouseLeave = (index) => {
    document.querySelector(".cursor").classList.remove("media-blend");
    gsap.fromTo(
      videoRefs.current[index],
      {
        opacity: 1,
        scale: 1,
      },
      {
        scale: 0,
        opacity: 0,
      }
    );
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-inner-banner">
              <div className="hero-inner-col left"></div>
              <div
                className="hero-inner-col right"
                // onMouseEnter={mouseEnter}
                // onMouseLeave={mouseLeave}
              >
                <div className="hero-inner-title">
                  <h1>We make it happen</h1>
                </div>
                <div className="hero-inner-links">
                  <div className="hero-inner-link-item">
                    <div className="hero-inner-link-item-padding"></div>{" "}
                    <Link
                      href={"/"}
                      onMouseEnter={() => mouseEnter(0)}
                      onMouseLeave={() => mouseLeave(0)}
                    >
                      <span>Websites</span>
                    </Link>
                  </div>
                  <div className="hero-inner-link-item">
                    <div className="hero-inner-link-item-padding"></div>{" "}
                    <Link
                      href={"/"}
                      onMouseEnter={() => mouseEnter(1)}
                      onMouseLeave={() => mouseLeave(1)}
                    >
                      <span>Apps</span>
                    </Link>
                  </div>
                  <div className="hero-inner-link-item">
                    <div className="hero-inner-link-item-padding"></div>{" "}
                    <Link
                      href={"/"}
                      onMouseEnter={() => mouseEnter(2)}
                      onMouseLeave={() => mouseLeave(2)}
                    >
                      <span>Branding</span>
                    </Link>
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
      <Cursor />

      <div className="cursor">
        <div className="cursor-media" ref={mediaRef}>
          <video
            ref={addVideoRef}
            src="videos/websites.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="websites"
          />
          <video
            ref={addVideoRef}
            src="videos/apps.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="apps"
          />
          <video
            ref={addVideoRef}
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
