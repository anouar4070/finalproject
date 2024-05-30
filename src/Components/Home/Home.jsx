import React, { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext'

const Home = () => {

  let { changeCounter } = useContext(CounterContext)
  return (
    <div>
<button onClick={() => changeCounter()} className='btn btn-info'>Change</button>

    </div>
  )
}

export default Home