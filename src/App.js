import "./App.css";
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Tollywood from "./components/Tollywood";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/>}></Route>
        <Route path="/Tollywood" element={ <Tollywood/>}></Route>
    
      </Routes> 
      </BrowserRouter>
  
    </div>
  );
}

export default App;
