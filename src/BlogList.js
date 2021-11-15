import { useState } from "react"

const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blogs) =>(
            <div className="blog-preview" key={blogs.id}>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
 
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;