import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const REVIEW = gql`
query GetReview($id: ID!) {
  review(id: $id){
    id
    title
    rating
    body
  }
}`

export default function ReviewDetails() {
    const { id } = useParams()
    const { loading, error, data } = useQuery(REVIEW, {
        variables: { id: id }
    })
    console.log('data', data)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    return (
        <div className="review-card">
            <Link to={`/`}>Go Back</Link>
            <div className="rating">{data.review.rating}</div>
            <h2>{data.review.title}</h2>
            <small>console list</small>
            <p>{data.review.body}</p>
            <Link to={`/`}>Go Back</Link>
        </div>
    )
}
