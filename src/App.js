import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Error from "./Error";
import About from "./About";

function App() {  
  return (
    <Router>
      <div className = "wrapper">
        <Navbar />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/create">
            <Create />
          </Route>
          <Route exact path = "/about">
            <About />
          </Route>
          <Route exact path = "/http://localhost:8000/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path = "*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
