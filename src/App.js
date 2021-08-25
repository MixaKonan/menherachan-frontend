import Main from "./main/Main";
import Admin from "./admin/Admin";
import Search from "./search/Search";
import Board from "./board/Board";
import Navigation from "./common/navigation/Navigation";
import Error from "./common/Error";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route path="/" component={Navigation}/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/search" exact component={Search} />
          <Route path="/board/:board" exact component={Board} />
          <Route component={Error} />
        </Switch>
    </Router>
  );
}

export default App;
