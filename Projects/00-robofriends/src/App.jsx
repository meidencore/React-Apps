import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fsobserverapi.onrender.com/Macro/observation/unrate')
      console.log(response)
      const data = await response.json()
      console.log(data)
      setData(data)
    }

    fetchData()
  }, [])
  


  return (
    <>
      <div> Hello World</div>
    </>
  )
}

export default App
