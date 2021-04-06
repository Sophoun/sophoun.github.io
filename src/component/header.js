import * as React from 'react'
import { Helmet } from "react-helmet"

const Header = ({ data }) => (
    <div>
        <Helmet title={`Sophoun - ${data?.frontmatter?.title ?? "Blog"}`} />
        Header
    </div>
)

export default Header