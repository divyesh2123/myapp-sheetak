import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {

  const userId = useParams();

  console.log(userId.postId);
  return (
    <div>Post</div>
  )
}
