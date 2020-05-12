import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Don't use @font-face in styled-components</h1>
    <p>
      This is an example how you <b>shouldn't</b> add a @font-face in a gatsby
      project.
    </p>
    <p>
      See how the page flickers if you click on a internal{" "}
      <Link to="/page-2/">link to page 2</Link>.
    </p>
    <p>
      Instead link/import your fonts like in this{" "}
      <a href="https://font-face-import.netlify.app">example</a>.
    </p>
    <div css="display: flex; flex-wrap: wrap; margin: 1em -1em">
      <div css="flex: 0 1 300px; margin: 1em">
        <Image />
      </div>
      <div css="flex: 1 1 0%; margin: 1em">
        <h2>The problem</h2>
        <p>
          If you click the linke below you will see, that the page will flicker.
          This shouldn't happen in a gatsby page. This is because the font-face
          is reloaded with each navigation. You can see in the dev-tools of your
          browser how the 'FireCode'-fonts are requested each time you click the
          link below.
        </p>
        <h2>Why is this happening?</h2>
        <p>
          If you define the font-face in styled-components for example with
          createGlobalStyle the fonts are reloaded on each render of react. See
          this Github{" "}
          <a href="https://github.com/gatsbyjs/gatsby/issues/16452">issue</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
