import React from 'react'
import { useParams } from 'react-router-dom'
import { TopStories } from '../Data/NewsData'

const NewsPage = () => {
  const {id} = useParams()

  const findData = TopStories.data.filter((myid) => myid.id == id)

  console.log(findData)

  return (
    <div>NewsPage</div>
  )
}

export default NewsPage