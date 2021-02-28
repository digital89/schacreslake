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
      </Helmet>

      {children}
    </>
  );
};

export default Layout;
