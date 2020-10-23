import React, {useState, useEffect} from 'react';
import './App.css';
import './index.css'
const API_URL = 'https://sv443.net/jokeapi/v2/joke/Any'
function App() {


const [data, setData] = useState({
  joke: "",
  ans: "",
  flags2: ""
})


const genJokes = () =>{

    fetch(API_URL)
    .then(res=> res.json())
 
    .then(data=> setData({
       joke: data.setup,
        ans: data.delivery,
        flags2: data.flags.nsfw
    }))

}
useEffect( () =>{

    genJokes()
  }, [])


  return (
    <div className="box">
     
     <h1> Cackle Up</h1>

     {/* <p> {data.joke} </p>
     <p> {data.ans}</p> */}
     
<p dangerouslySetInnerHTML= {{__html: data.joke}}></p>

<p dangerouslySetInnerHTML= {{__html: data.ans}}></p>
     <button onClick={genJokes}> Get a new joke</button>
    </div>
  );
}

export default App;
