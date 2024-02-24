import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";
import Header from "./components/header";
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import Home from "./components/home";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
