// Below allows us to grab paramaters from the route ( in this case it will be :id)
import { useParams } from "react-router";

const BlogDetails = () => {

    // useParams is a function built in from react router dom
    const { id } = useParams()
    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id } </h2>
        </div>
     );
}
 
export default BlogDetails;