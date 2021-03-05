import * as React from "react";
import { InlineWidget } from "react-calendly";

import Layout from "../components/Layout";
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
                    <img src="/images/icon.png" alt="Logo" />
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

        <section className="section section-1">
          <div className="container content">
            <h4>
              MY DREAM COMING TRUE. 20,000 m3 to go. I've had this dream for a lot of years to build a waterski lake, and the only thing better... now it's starting to come true. Check back to see how this crazy adventure is going.
            </h4>
          </div>
        </section>

        <section className="section section-1">
          <div className="container content">
            <div>
              <h2>Book a time slot:</h2>
              <InlineWidget
                url="https://calendly.com/digital89"
                styles={{
                  height: "630px",
                  // maxWidth: "100px",
                  // width: "100%",
                }}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container content">
            <h2>By-the-hour weather:</h2>
            <WeatherWidget />
          </div>
        </section>

        <section className="section">
          <div className="container content">
            <h2>Location:</h2>
            <iframe
              allowFullScreen
              frameBorder="0"
              loading="lazy"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.91321205774!2d-113.76414418387218!3d52.4807070798068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53750426db5f53b1%3A0x959a09c11b0842c7!2sSchacres%20Lake!5e0!3m2!1sen!2sca!4v1614983733182!5m2!1sen!2sca"
              style={{
                border: 'none',
                height: '300px',
                width: '100%',
              }}
              title="Google Maps View"
            />

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
