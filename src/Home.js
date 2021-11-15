import { useEffect, useState } from "react"
import BlogList from './BlogList'

const Home = () => {
// create a state for blogs and a function state to update
    const [blogs, setBlogs] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [error, setError] = useState(null)

    // const handleDelete = (id) => {
    //     // create function to filter and delete the right blog
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     //set the new state as the blog has been passed
    //     setBlogs(newBlogs)
    //     // we then pass this function through as a prop 
    // }

    useEffect(() => {
        setTimeout(() =>{
                         // fetch data from json fake db
        fetch('http://localhost:8000/blogs')
                // .then because it's a promise 
            .then(res =>{
                // check if res status is !NOT OK 
                if(!res.ok) {
                    throw Error("Could not fetch data from that resource")
                }
            // change format of the data to json
                return res.json()
            })
            // new promise with the data
                .then((data) => {
            // change the state of the blogs with the input of the data
                    setIsLoading(false)
                    setBlogs(data)
                    setError(null)
                })
            .catch((err) =>{
                setIsLoading(false)
                setError(err.message)
            })
        }, 1000)
    }, [])
    
    return ( 
        <div className="home"> 
            {/* {/ * blogs are null and need time to pull the data in. && buys time */} 
            {error && <div> { error } </div>}
            {isLoading && <div>Loading...</div>}
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