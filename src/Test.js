import React from 'react'
import { Link } from 'react-router-dom'
import './first.css'

const Test = () => {
  return (
    <nav>
    <ul className='style'>
        <li className='list'>
            <Link to='/'>First</Link>
        </li>
        <li className='list'>
            <Link to='/form'>Form</Link>
        </li>
        <li className='list'>
            <Link to='/image'>Second</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Test