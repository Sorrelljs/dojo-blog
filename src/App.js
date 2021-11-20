import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'
// eslint-disable-next-line no-lone-blocks
{/* curly braces allow react to use dynamic values */}

function App() {

  // const title = 'Welcome to the New Blog'
  // const likes = 50
  // // const person = { name: 'y0shi', age: 30 - Objects ARE NOT allowed in reacts dynamic values}
  // const googleLink = "https://www.google.com"


  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            {/* Below we use "Switch" to control one Route at a time */}
            <Switch>
              {/* Below we use "Route" with the Route atrribute "PATH" to provide the path (url). We use the atrribute
                  "exact"* because switch matches the first path that has a similar name */}
              <Route exact path="/">
                {/* Below we provide the component we want to display in the particular Route 
                    In this case it's <Home />  */}
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>

              <Route path="/blogs/:id">
                <BlogDetails/> 
              </Route>
                        {/* This "*" catches all routes that don't match the above
                            Always keep this at the bottom of all routes */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
     </Router>






      //  {/* *****    NOTES  ****** */}
      // {/* <h1>{title}</h1>
      //   <p>liked {likes} times</p>
      // {/* {<p> {person} </p>} */}
      // {/*    THE ONLY different data types allowed in react       */}
      // {/* <p>{10}</p> */}
      // {/* <p>{"Hello guys"}</p>  */}
      // {/* <p>{[1,2,3,4]}</p> */}
      // {/* <p>{Math.random() * 10}</p> */}
      // {/* <a href={googleLink}>google link</a>  */} 
  );
}

export default App;
