import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Demo from "./Demo";
import Update from "./Update";
import Auth from "./Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
