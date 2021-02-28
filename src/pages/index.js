import * as React from "react";
import { InlineWidget } from "react-calendly";

import Layout from "../components/Layout";
// import CalendarWidget from "../components/CalendarWidget";
import WeatherWidget from "../components/WeatherWidget";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <section className="hero is-medium">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src="https://placekitten.com/300/100" alt="Logo" />
                  </a>
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                    {/* <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Contact</a> */}
                    <span className="navbar-item">
                      <a className="button is-primary">
                        <span>(403) 123-4567</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container">
              <h1 className="title">Welcome to Schacres Lake</h1>
              <h2 className="subtitle">Waterskiing in Lacombe!</h2>
              <div>
                <a className="button is-medium">
                  <strong>Contact Us!</strong>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div>about blurb</div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div>
              {/* <CalendarWidget /> */}
              <InlineWidget
                url="https://calendly.com/jaredreich"
                styles={{
                  height: "630px",
                  // maxWidth: "100px",
                  // width: "100%",
                }}
              />
            </div>
          </div>
        </section>

        <section className="section section-inverted">
          <div className="container">
            <WeatherWidget />
          </div>
        </section>

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <div>
                <span>© Schacres Lake</span>
                <span> - </span>
                <a
                  href="https://digital89.com"
                  title="Website by Digital89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website by <strong>Digital89</strong>
                </a>
              </div>
            </p>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default IndexPage;
