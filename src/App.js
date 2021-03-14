import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact />
          <Route path="/Contact-us" exact />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
