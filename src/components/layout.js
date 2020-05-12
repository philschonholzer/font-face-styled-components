/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fira Code';
    font-display: fallback;
    src: url('/font/FiraCode-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Code';
    font-display: fallback;
    src: url('/font/FiraCode-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'Fira Code';
    margin: 0;
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header siteTitle="@font-face in Gatsby" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer css="padding-top: 2em;">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
