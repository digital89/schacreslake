import React from "react";
import { Helmet } from "react-helmet";

import { domainName, seoDescription, seoTitle } from "../../cms/data.json";

import "../styles/index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />

        <meta name="author" content="Echo Lacombe" />
        <meta name="copyright" content="© Echo Lacombe" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <link rel="canonical" href={`https://${domainName}`} />

        {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16-16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#d3d3d3" />
        <meta name="msapplication-TileColor" content="#d3d3d3" /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#D3D3D3" />
        <meta name="theme-color" content="#D3D3D3" />
      </Helmet>

      {children}
    </>
  );
};

export default Layout;
