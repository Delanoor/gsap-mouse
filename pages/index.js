import { useEffect, useRef } from "react";
import Cursor from "../components/Cursor";
import gsap from "gsap";
import { useState } from "react";
import Link from "next/link";
import useMousePosition from "../hooks/useMousePosition";
import { useCallback } from "react";
import { useWindowEvent } from "../hooks/useWindowEvent";

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState();

  let videoRefs = useRef([]);

  const cursorRef = useRef(null);
  const addVideoRef = (ref) => {
    if (ref) {
      videoRefs.current.push(ref);
    }
  };

  let mediaRef = useRef(null);

  // const { x, y } = useMousePosition();

  const onMove = useCallback(({ clientX, clientY }) => {
    cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
  }, []);

  const onDown = useCallback(() => {
    cursorRef.current.style.setProperty("--cursorScale", 1.3);
  }, []);
  const onUp = useCallback(() => {
    cursorRef.current.style.setProperty("--cursorScale", 0.3);
  }, []);

  useEffect(() => {
    cursorRef.current.style.transform = `translate3d(${innerWidth / 2}px, ${
      innerHeight / 2
    }px, 0)`;
    // console.log(cursorRef.current.getBoundingClientRect());
    console.log(window.getComputedStyle(cursorRef.current, ":before"));
  }, []);
  useWindowEvent("pointermove", onMove);
  useWindowEvent("pointerdown", onDown);
  useWindowEvent("pointerup", onUp);

  const mouseEnter = (index) => {
    setVideoPlaying(index);
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
    setVideoPlaying(null);
    document.querySelector(".cursor").classList.remove("media-blend");
    cursorRef.current.style.setProperty("--cursorScale", 0.3);

    gsap.fromTo(
      videoRefs.current[index],
      {
        // opacity: 1,
        scale: 2.4,
      },
      {
        duration: 0.4,
        scale: 0,
        // opacity: 0.7,
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
                  <div
                    className="hero-inner-link-item"
                    onMouseEnter={() => mouseEnter(0)}
                    onMouseLeave={() => mouseLeave(0)}
                  >
                    <Link href={"/"}>
                      <span>Websites</span>
                    </Link>
                  </div>
                  <div
                    className="hero-inner-link-item"
                    onMouseEnter={() => mouseEnter(1)}
                    onMouseLeave={() => mouseLeave(1)}
                  >
                    <Link href={"/"}>
                      <span>Apps</span>
                    </Link>
                  </div>
                  <div
                    className="hero-inner-link-item"
                    onMouseEnter={() => mouseEnter(2)}
                    onMouseLeave={() => mouseLeave(2)}
                  >
                    <Link href={"/"}>
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
      {/* <Cursor /> */}

      <div
        ref={cursorRef}
        className="cursor"
        // style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
      >
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
