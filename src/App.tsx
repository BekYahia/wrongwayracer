// import { useState } from 'react'
import { Container } from '@mui/material';

import Car from './assets/components/Car';
import Board from './assets/components/Board';

function App() {
  // const [count, setCount] = useState(0)

  return (

    <Container className="App">
       <Car />
       <Board />
    </Container>
  )
}

export default App
