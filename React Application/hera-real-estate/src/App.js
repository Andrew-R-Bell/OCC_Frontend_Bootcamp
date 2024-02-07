import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./Components/Navbar"; 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Properties from "./Pages/Properties";  

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Properties' element={<Properties/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
