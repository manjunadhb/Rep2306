import "./App.css";

function App() {
  return (
    <div className="App">
     
    <form>
      <h1>Login form</h1>
      <div>
       <label>FirstName <b>*</b></label>
        <input></input>
      </div>
      <div>
       <label>LastName<b>*</b> </label>
        <input></input>
      </div>
      <div>
       <label>Email  <b>*</b></label>
        <input></input>
      </div>
      <div>
       <label>Password <b>*</b> </label>
        <input></input>
      </div>
      <button type="button">Login</button>
    </form>
      
    </div>
  );
}

export default App;
