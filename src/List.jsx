import React,{useContext} from 'react'
import Item from './components/Item'
import { ReviewContext } from './ReviewContext'

const List = () => {
    const {tosin, setTosin}=useContext(ReviewContext)
  return (
    <>
      {tosin.map((review, index)=>(
        <Item key={index++} review={review} />
      ))}
    </>
  )
}

export default List
