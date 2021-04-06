import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Helmet } from "react-helmet"

const Header = ({ data }) => (
    <div className="col-12">
        <Helmet title={`Sophoun - ${data?.frontmatter?.title ?? "Blog"}`} />
        <div className="row d-flex justify-content-between">
            <Link href="#0">
                <StaticImage
                    src="../images/Logo@2x.png"
                    className="flex-start"
                    alt="Logo"
                />
            </Link>
            <div className="align-content-end">
                <a href="#1" className="button btn">Home</a>
                <a href="#2" className="button btn ml-2">Resume</a>
            </div>
        </div>
    </div>
)

export default Header