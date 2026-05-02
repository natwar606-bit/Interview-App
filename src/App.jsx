import React, { useState } from 'react'
import Home from './pages/Home';
import Interview from './pages/Interview'


const App = () => {
  const [start , setStart] = useState(false)
  const [category , setCategory] = useState(null);

  const handleStart = (cat) =>
  {
    setStart(true);
    setCategory(cat);
    console.log(cat)
  }

  const handleReset = () =>{
    setStart(false);
    setCategory(null);
  }
  return (
    start ? <Interview category = {category} onReset={handleReset}/> : <Home onStart = { handleStart}/>

  )
}

export default App