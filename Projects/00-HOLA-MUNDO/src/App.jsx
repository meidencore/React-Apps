
import { useState, useEffect } from 'react'
import TwitterFollowCard from './components/TwitterFollowCard'
import './App.css'

const App = () => {
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()

      setUsers(users)

    } catch {
      console.error
    }
  }
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  },[])
  

  return (

    <section className='App'>
      {
        users.map(({ username, name, id }) => (
          <TwitterFollowCard
            key={id}
            userName={username}
            
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App