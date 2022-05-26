import React,{useState} from 'react'
import Nav from './Components/Nav'
import Word from './Components/Word'
const App = () => {
  const [mode, setmode] = useState('light')
  const togglemode=()=>{
  if(mode==="light"){
    setmode("dark")
    document.body.style.backgroundColor="grey"
  }else{
    setmode("light")
    document.body.style.backgroundColor="white"
  }
  }
  return (
    <>
    <Nav mode={mode} togglemode={togglemode}/>
      <Word  mode={mode}/>
    </>
  )
}

export default App