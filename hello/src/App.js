import "./App.css";
import Message from "./components/Message";
function App() {
  return (
    <div className="App">
      <Message name="DaffyDuck"/>    
      <Message name="Bugs bunny"/>
      <Team name="Paris" title={5} />    
      <Team name="Liverpool" title={14} /> 
      <Team name="Marseille" title={0} />    
    </div>
  );
}

export default App;