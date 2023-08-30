import { useParams } from "react-router-dom";

export const Review = () =>{
  const {movieId} = useParams();
  return <div>Review: {movieId}</div>
}