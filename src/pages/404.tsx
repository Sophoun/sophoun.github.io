import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../layout/layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout
      center={true}>
      <div>
        <div className="not-found">
          <StaticImage
            src="../images/404.jpg"
            alt="404"
            layout="constrained"
            width={400}
            loading="lazy"
            placeholder="dominantColor" />
        </div>
        <div>
          <h1 className="text-center">Page not found</h1>
          <p className="text-center">Sorry 😔 we couldn’t find what you were looking for.</p>
          <p className="text-center">
            <a href="/">Go home</a>.
          </p>
        </div>
      </div>
    </Layout >
  )
}

export default NotFoundPage
