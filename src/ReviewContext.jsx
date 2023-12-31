import React, {createContext, useState, useEffect} from 'react'
// const url = 'https://jsonplaceholder.typicode.com/posts'
const url = "http://localhost:8000/api/v1/alltodo/"
export const ReviewContext= createContext()
const GetContext = ({children}) => {
    const [tosin, setTosin]=useState([])
    const getReview =async () => {
        const response= await fetch(url)
        const data=await response.json()
        console.log(data)
        setTosin(data)
    }
   useEffect(()=>{
    getReview()
   }, [])


   const addReview = async (newReview) => {
    // const url = 'https://jsonplaceholder.typicode.com/posts'
    const url = "http://localhost:8000/api/v1/createtodo/"

    const response = await fetch(url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReview),
    })
    const data = await response.json()
    setTosin([data, ...tosin])

   }


   const deleteReview = async(id) => {
    if(window.confirm('Are you sure you want to delete this?')){
      await fetch(`http://localhost:8000/api/v1/delete/${id}`,{
          method: 'DELETE',
      })
      setTosin(tosin.filter((item)=> item.id !== id))
    }

   }
   
  return (
    <ReviewContext.Provider value={{tosin, setTosin, addReview, deleteReview}}>
        {children}
      
    </ReviewContext.Provider>
  )
}

export default GetContext

