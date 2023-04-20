import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Rasik" speciality='Lol'></District>
      <District name="Tazim" speciality='Lol'></District>
    </div>
  );
}

function District (props){
  return (
    <div className='disrict'>
      <h2>Name : {props.name}</h2>
      <p>Speciality : {props.speciality}</p>
    </div>
  )
}
export default App;
