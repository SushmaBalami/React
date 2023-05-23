import React,{useState,useEffect} from 'react'

const Main = () => {
    const[count,setCount]=useState(0)
    const[data,setData]=useState(1)

    useEffect(()=>{
        alert('this is a useEffect')
    },[])
  return (
    <>
    <center>
        <h2>{count}</h2>
    <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Click here</button>
    <hr/>
    <h2>{data}</h2>
    <button className='btn btn-success' onClick={()=>setData(data+1)}>Click here</button>
    </center>
    </>
  )
}

export default Main