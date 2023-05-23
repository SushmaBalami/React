import React,{useState} from 'react'

const IncrementDecrement = () => {
    const[counter,setCounter]=useState(1)
  return (
    <>
    <h2>{counter}</h2>
    <button className='btn btn-danger' onClick={()=>setCounter(counter+1)}>Increment</button>
    &nbsp;
    &nbsp;
    {
        counter>1 &&

    <button className='btn btn-warning' onClick={()=>setCounter(counter-1)}>Decrement</button>
}
    </>
  )
}

export default IncrementDecrement