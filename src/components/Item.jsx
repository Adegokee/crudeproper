import React, {useContext} from 'react'
import { ReviewContext } from '../ReviewContext'

const Item = ({review}) => {
  const {deleteReview}= useContext(ReviewContext)
  return (
    <div>
      <h3>{review.title}</h3>
      <p>{review.body}</p>
      <button onClick={() => deleteReview(review.id)}>Delete</button>
    </div>
  )
}

export default Item
