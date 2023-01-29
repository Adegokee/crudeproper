import React, {useState, useContext}from 'react'
import { ReviewContext } from '../ReviewContext';


const Form = () => {
  const {addReview}=useContext(ReviewContext);
    const [title, setTitle]=useState('')
    const[body, setBody]=useState('')
    const [type, setType]=useState('')
    const handleSubmit = (e)=> {
    e.preventDefault()
    const newReview = {body, title}
   setBody('')
   setTitle('')
   addReview(newReview)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder='Enter Review' value={body} onChange={(e) => setBody(e.target.value)}/>
        <input type="submit" value='Submit' />
      </form>
      {type}
    </div>
  )
}

export default Form
