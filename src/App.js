import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Rasik" speciality='Lol'></District>
      <District name="Tazim" speciality='Lol'></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => setPosts(data))
  },[]);
  return(
    <div>
      <h1>lol : {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body} ></Post>)
      }
    </div>
  )
}

function Post (props){
  return(
    <div style={{
      backgroundColor : 'cyan',
      padding : '10px',
      borderRadius: '8px',
      margin: '15px'
    }}>
      <h2>Title : {props.title}</h2>
      <p>Body : {props.body}</p>
    </div>
  )
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
