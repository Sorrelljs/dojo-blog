import { useState } from "react"
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    return ( 
        <div className="home">   
             <BlogList blogs={blogs} title="All Blogs!"/>
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