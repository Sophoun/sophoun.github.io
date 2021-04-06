import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../layout/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ marginTop: '200px' }} className="row">
        <div className="w-100 d-flex justify-content-between">
          <div className="col-6">
            <p className="paragraph1">Hello</p>
            <p className="hello-bold">I'm Sophoun</p>
            <p className="paragraph2">Freelancer mobile &amp; web developer</p>
          </div>
          <div className="col-6">
            <StaticImage
              width={600}
              src="../images/banner1@2x.png"
              alt="Banner 1"
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '200px', marginBottom: '200px' }} className="row">
        <div className="w-100 d-flex justify-content-between">
          <div className="col-6">
            <StaticImage
              width={600}
              src="../images/banner2@2x.png"
              alt="Banner 2"
            />
          </div>
          <div className="col-6">
            <p className="content-title">About Me</p>
            <hr className="break-line" />
            <p className="paragraph3">I'm a software developer specialized in mobile development for complex scalable apps and also confident in backend development. I have more than  6 years experience building software for company around the world and I also write about software development on my blog.</p>
            <p className="paragraph3">Want to know how I may help your project? check out below.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
