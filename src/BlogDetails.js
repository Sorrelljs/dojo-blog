// Below allows us to grab paramaters from the route ( in this case it will be :id)
import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    // useParams is a function built in from react router dom
    const { id } = useParams()
    // below we reuse our custom fetch hook and pull the data, error is there is one and loading time (isPending)
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)


    return ( 
        <div className="blog-details">
            {/* Below, if isPending is TRUE then display Loading sign */}
            {isPending && <div>Loading...</div>}
            {/* Next if Error Is TRUE then show error */}
            { error && <div>{{ error }} </div> }
            {/* If blog is TRUE show information */}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by : { blog.author }</p>
                    <div>{ blog.body } </div>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;