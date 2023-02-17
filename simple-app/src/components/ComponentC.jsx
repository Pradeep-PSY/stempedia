import React from 'react'
import { useSelector } from 'react-redux'

const ComponentC = () => {
    const {value} = useSelector(state=>state.app)
  return (
    <div>
        <p>{value?(value):"write something to see output"}</p>
    </div>
  )
}

export default ComponentC