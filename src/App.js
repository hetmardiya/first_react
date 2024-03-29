import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";
import Header from "./components/header";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"
import Home from "./components/home";
import Footer from "./components/footer"
import Contact from "./components/contact";
import Services from "./components/services";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/services" element = {<Services />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
