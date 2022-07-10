import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const PostLink = ({ post }) => (
    <Link className="text-decoration-none text-black shadow border border-1 m-2 w-100 h-100"
        to={post.frontmatter.path}>
        <div className="p-3 row">
            <div className="col-sm-8 col-7 ps-4">
                <h3 className="post-title">{post.frontmatter.title}</h3>
                <p>
                    Date: {post.frontmatter.date}
                    <br />
                    Author {post.frontmatter.author}
                </p>
                <p>{post.fields.readingTime.text}</p>
            </div>
            <GatsbyImage
                className="col-sm-4 col-5"
                image={getImage(post.frontmatter.featureImage)} alt="" />
        </div>
    </Link>
)
export default PostLink