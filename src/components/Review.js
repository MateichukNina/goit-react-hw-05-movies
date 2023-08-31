import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "./api-movie";


export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReview = async () => {
      try {
        const response = await getReview(movieId);
        if (response.results && Array.isArray(response.results)) {
          setReviews(response.results);
        } else {
          console.log("Invalid response format:", response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadReview();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};