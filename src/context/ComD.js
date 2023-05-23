import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'
const ComD = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <h2 className='text-success text-center'>
        The javascript library we are learining is {data}.
    </h2>
    </>
  )
}

export default ComD