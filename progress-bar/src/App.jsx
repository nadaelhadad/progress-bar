import { useState } from 'react'

import './App.css'

function App() {
  const [percentage, setpercentage] = useState(10)

  const handleChange=(e=>{
    let value=parseInt(e.target.value)
    setpercentage(value)
  })
  return (
    <>
      <div className='progress-bar'>
      
        <div className='progress-filled' style={{width:{percentage}}}>{percentage}%</div>
      </div>
      <div className="input-container">
        <label htmlFor='input'>Input Percentage:</label>
        <input id='input' name='input' value={percentage} type='number' onChange={handleChange}></input>
      </div>
    </>
  )

}

export default App
