import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Helmet } from "react-helmet"

const Header = ({ data }) => (
    <div style={{ marginTop: '25px' }} className="col-12">
        <Helmet title={`Sophoun - ${data?.frontmatter?.title ?? "Blog"}`} />
        <div className="row d-flex justify-content-between">
            <StaticImage
                src="../images/Logo@2x.png"
                className="flex-start"
            />
            <div className="align-content-end">
                <a href="#" className="button btn">Home</a>
                <a href="#" className="button btn ml-2">Resume</a>
            </div>
        </div>
    </div>
)

export default Header