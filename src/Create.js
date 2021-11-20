import { useState } from "react";
// below is a feature from react-router-dom that allows us to redirect paths 
import { useHistory } from "react-router-dom";

const Create = () => {
// below we create 3 states for the data we want to keep
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author}

        setIsPending(true)

// BELOW WE MAKE A FETCH REQUEST WITH THE POST METHOD AND SENT THE DATA IN THE BLOG OBJ IN JSON FORMAT 
        fetch('http://localhost:8000/blogs', { 
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(blog)
    }).then(() => {
        // SET INTERVAL JUST DELAYS BELOW FOR 2 SECONDS
            console.log("new blog added")
            setIsPending(false)
            // below is the useHistory feature from react-router-dom. This allows us to redirect to paths 
            // you can also redirect to the previous path using (-1) or forward path (1)
            // .go is to GO to a previous page
            // history.go(-1)

            // .push is to PUSH / REDIRECT to a page
            history.push('/')

        }, 2000)

    }

    return ( 
        <div className="create">
            <h2>Add a new blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                {/* Below we set the value as the title state 
                 / and we also use the event inside the annonymous function to use the setState to update 
                 / what the users input is*/}
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                 {/* Below we set the value as the body state 
                 / and we also use the event inside the annonymous function to use the setState to update 
                 / what the users input is*/}
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}>

                </textarea>
                 {/* Below we set the value as the author state 
                 / and we also use the event inside the annonymous function to use the setState to update 
                 / what the users input is*/}
            <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="liugi">luigui</option>
                </select> 
                {!isPending &&<button>Add blog</button>}
                {isPending &&<button disabled>Adding blog...</button>}
                {/* Below we output the users output when the change is happening using state */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;