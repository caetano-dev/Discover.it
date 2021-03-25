import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Destination from "./pages/Destination";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Destination" exact component={Destination} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact-us" exact component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
