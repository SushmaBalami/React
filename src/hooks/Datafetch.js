import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Card from './Card'
import { ThemeContext } from '../themes/ThemeContext'

const Datafetch = () => {
    const[posts,setPost]=useState([])
    const theme=useContext(ThemeContext)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=> console.log(err))

    },[])
  return (
    <div style={{backgroundColor:theme.background, color:theme.color}}>
    {posts.map((post,i)=>(
     <Card key={i} title={post.title} desc={post.body}/>
   ) )}
    </div>
  )
}

export default Datafetch