import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs; 
    // const title = props.title
    // const handleDelete is a function being passed through a prop

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blogs) =>(
            <div className="blog-preview" key={blogs.id}>
                <Link to={`blogs/${blogs.id}`}>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                {/* annonymous function on click event to fire function made in home.js. Passing in blog.id to correctly
                select the chosen blog to delete */}
                {/* <button onClick={()=> handleDelete(blogs.id)}>Delete Blog</button>  */}
                </Link>
             </div>
                ))}
            </div>
     );
}
 
export default BlogList;