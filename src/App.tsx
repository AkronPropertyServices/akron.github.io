import React, { useRef, Suspense } from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider } from "./LanguageContext";

import "./App.css";
import Loading from "./Loading";
import AnimatedComponent from "./AnimatedComponent";
// import background from "./assets/images/background.jpg";

const ImageDisplay = React.lazy(() => import("./ImageDisplay"));
const About = React.lazy(() => import("./About"));
const Services = React.lazy(() => import("./Services"));
const Contact = React.lazy(() => import("./Contact"));
const Footer = React.lazy(() => import("./Footer"));
const Header = React.lazy(() => import("./Header"));
const Slogan = React.lazy(() => import("./Slogan"));

function App() {
  const parallaxRef = useRef(null);
  function logoClicked() {
    let url = new URL(window.location.href);
    let domain = url.origin;
    if (url.toString().slice(0, url.toString().length - 1) === url.origin) {
      //@ts-ignore
      parallaxRef.current?.scrollTo(0);
      window.scrollTo(0, 0);
    } else {
      document.location.href = domain;
    }
  }

  return (
    <LanguageProvider>
      <Suspense fallback={<Loading />}>
        <Header clickFn={logoClicked} />
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                children: (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(#130004, #450011)",
                      zIndex: -10,
                    }}
                  />
                ),
                speed: -50,
                className: "-z-10",
              },
            ]}
          >
            <AnimatedComponent>
              <Slogan />
            </AnimatedComponent>
            <AnimatedComponent>
              <ImageDisplay />
            </AnimatedComponent>
            <AnimatedComponent>
              <About />
            </AnimatedComponent>
            <AnimatedComponent>
              <Services />
            </AnimatedComponent>
            <AnimatedComponent>
              <Contact />
            </AnimatedComponent>

            <Footer />
          </ParallaxBanner>
        </ParallaxProvider>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;

// TODO: Fix the footer CSS again, breaks at 810

// TODO: Convert all CSS to tailwind classes
// TODO: everything is cramped, add more padding
// TODO: make text smaller
// TODO: black background with red border
// TODO: maybe fix rounding for popup?
// TODO: the footer info div, should have same spacing from right and top and bottom
// TODO: change footer colour
