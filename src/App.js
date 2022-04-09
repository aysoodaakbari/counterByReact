
import { Component } from 'react';
import './App.css';

 class App extends Component
 {
   constructor(){
     super();
    this.state={
      number:0,
    }
   }
   render()
   {
  return (
    <div className="App">
     <h1>
       {this.state.number}
     </h1>
    </div>
  )
 }
}


export default App;
