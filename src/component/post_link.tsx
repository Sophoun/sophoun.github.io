import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const PostLink = ({ post }) => (
    <Link className="text-decoration-none text-black shadow border border-1 m-2 w-100"
        to={post.frontmatter.path}>
        <div className="p-3 row">

            <GatsbyImage
                className="col-sm-2 col-5"
                image={getImage(post.frontmatter.featureImage)} alt="" />

            <div className="col-sm-10 col-7 ps-4">
                <h3 className="">{post.frontmatter.title}</h3>
                <p>Date: {post.frontmatter.date}</p>
                <p>Author {post.frontmatter.author}</p>
            </div>
        </div>
    </Link>
)
export default PostLink