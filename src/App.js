import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Rasik" speciality='Lol'></District>
      <District name="Tazim" speciality='Lol'></District>
    </div>
  );
}

const lol = {
  margin: '20px',
  backgroundColor: 'lightblue',
  padding: '10px',
  borderRadius: '10px'
}

function District (props){
  const[power, setPower] = useState(10);

  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }

  return (
    <div className='disrict' style={lol}>
      <h2>Name : {props.name}</h2>
      <p>Speciality : {props.speciality}</p>
      <h4>Power : {power}</h4>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}
export default App;
