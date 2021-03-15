import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About}/>
          <Route path="/Contact-us" exact />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
