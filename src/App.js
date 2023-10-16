import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";



function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
  <Route path="/" element ={<Login/>} ></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
  <Route path="/About" element ={<About/>}></Route>
  
  
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
