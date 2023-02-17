import React from 'react'
import { setValue } from '../actions/action'
import { useDispatch } from 'react-redux'

const ComponentB = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        
        dispatch(setValue(e.target.value))
    }
  return (
    <div >
        <input type='text' onChange={handleChange} />
    </div>
  )
}

export default ComponentB