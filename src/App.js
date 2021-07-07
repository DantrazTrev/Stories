import Card from './components/Card/Card'
import Search from './components/Search/Search'
import './App.css';
import {useEffect,useState} from 'react'

const cors_proxy="https://corsetsmf.herokuapp.com";



function App() {
   const [stories,setStory]= useState([])
   const [filterData,setFD]= useState([])
   
   const url=cors_proxy+"/https://ace.qtstage.io/api/v1/collections/entertainment"
  useEffect(() => {
    const stry = fetch(url)
    stry.then(
      (resp)=>{
       return resp=resp.json()
      })
      .then((data)=>{
       setStory(data.items)
       setFD(data.items)
      })
  },[url])

  const search=(input)=>{
      const lwsea= input.toLowerCase()
    setFD(stories.filter((s)=>{ return s.story.headline.toLowerCase().includes(lwsea)}))
  }
  
  return (
    <div className="App">
      <Search Searchfn={search}/>
      <div className="Stories">
      {filterData.map((story)=>{
        return <Card key={story.id} story={story}/>
      })}
  </div>
    </div>
  );
}

export default App;
