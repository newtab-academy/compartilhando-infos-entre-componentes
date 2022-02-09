
import './App.css';
import Subheader from './Subheader';
import Main from './Main';
import { useState } from 'react'

function App() {

  const [num,setNum] = useState(0)
  const handleChangeNumber = (evt) => {
    setNum(evt.target.value)
  }
  return <>
    <Subheader changeNumber={handleChangeNumber}/>
    <Main number={num} />
  </>
}

export default App;
