import BlogList from './BlogList'
import useFetch from "./useFetch";

const Home = () => {
const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
     // const handleDelete = (id) => {
    //     // create function to filter and delete the right blog
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     //set the new state as the blog has been passed
    //     setBlogs(newBlogs)
    //     // we then pass this function through as a prop 
    // }

    
    return ( 
        <div className="home"> 
            {/* if error is true, show error*/} 
            {error && <div> { error } </div>}
            {/* If isLoading is true, show loading...  */}
            {isLoading && <div>Loading...</div>}
            {/* If there are blogs, show blogList and pass props */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
             {/* <BlogList blogs={blogs.filter((blog) =>  blog.author === 'mario')} */}
                    
             {/* title="Mario's blogs"/> */}
         </div>
       
       // let name = "mario"
       // const [name, setName] = useState("mario")
       // const [age, setAge] = useState(27)   
   
       // const handleClick = () => {
       //     setName("Sorrell") 
       //     setAge(50)
       // }
   
       // const handleClickAgain = (name, e) => {
       //     console.log("Hello " + name, e.target)
       // }
       
        /* //     <h2>Home Page</h2>
        //     <p>{ name }</p>
        //     <p>{ age }</p>
        //     <button onClick={handleClick}>Click Me</button>
        //     <button onClick={(e)=> {handleClickAgain("sorrell", e)}}>Click Me Again</button> */
     );
}
 
export default Home;