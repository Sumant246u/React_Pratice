import React from 'react'
import Users from './Hooks/Custom_Hooks/Users'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
     <Users/>
     <h1>
      Redux Toolkit Demo
      <Counter/>
     </h1>
    </div>
  )
}

export default App