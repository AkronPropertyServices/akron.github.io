import React, { Suspense, Component } from "react";
import Measure, { ContentRect } from "react-measure";
import { useWindowSize } from "@react-hook/window-size";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./App.css";
import Loading from "./Loading";
import AnimatedComponent from "./AnimatedComponent";
import background from "./assets/images/background.jpg";

const ImageDisplay = React.lazy(() => import("./ImageDisplay"));
const About = React.lazy(() => import("./About"));
const Services = React.lazy(() => import("./Services"));
const Contact = React.lazy(() => import("./Contact"));
const Footer = React.lazy(() => import("./Footer"));
const Header = React.lazy(() => import("./Header"));

class AppComponent extends Component {
  parallaxRef = React.createRef();

  state = {
    windowHeight: this.props.windowHeight,
    pages: 0,
    factor: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.windowHeight !== this.props.windowHeight) {
      this.setState({
        windowHeight: this.props.windowHeight,
      });
    }
    let el = document.querySelector("#loading");
    console.log(el);
    if (!el) return;
    el.outerHTML = "";
  }

  componentDidMount(): void {
    console.log("mounted");
  }

  logoClicked = () => {
    let url = new URL(window.location.href);
    let domain = url.origin;
    if (url.toString().slice(0, url.toString().length - 1) === url.origin) {
      //@ts-ignore
      this.parallaxRef.current?.scrollTo(0);
    } else {
      document.location.href = domain;
    }
  };

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Header clickFn={this.logoClicked} />
        <Parallax
          pages={this.state.pages}
          ref={this.parallaxRef}
          key={this.state.pages}
        >
          <ParallaxLayer
            key={this.state.factor}
            offset={0}
            speed={1}
            factor={this.state.factor}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer speed={0.5} offset={0} factor={1}>
            <Measure
              bounds
              onResize={(contentRect: ContentRect) => {
                console.log("pages: " + this.state.pages);
                if (!contentRect?.bounds) return;
                this.setState({
                  pages: Math.ceil(
                    contentRect.bounds.height / this.state.windowHeight,
                  ),
                  factor: Math.ceil(
                    ((contentRect.bounds.height / this.state.windowHeight) *
                      1) /
                      0.5,
                  ),
                });
                console.log({
                  pages: this.state.pages,
                  factor: this.state.factor,
                });
                console.log(contentRect);
              }}
            >
              {({ measureRef }) => (
                <div ref={measureRef}>
                  <AnimatedComponent>
                    <h3 className="slogan">
                      <i>
                        <span className="slogan-highlight">Neat</span> and
                        <span className="slogan-highlight"> Tidy</span>,{" "}
                        <br></br> because it's our
                        <span className="slogan-highlight"> Duty</span>
                      </i>
                    </h3>
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
                </div>
              )}
            </Measure>
          </ParallaxLayer>
        </Parallax>
      </Suspense>
    );
  }
}

function App() {
  const [_, windowHeight] = useWindowSize();
  return <AppComponent windowHeight={windowHeight} />;
}

export default App;
