import React from "react";
import "./Movie.css";

const Movie = () => {
  return (
    <div className = "Card">
      <div className = "movie-container">
        <p>Image of the movie</p>
      </div>
      <div className = "movie-content">
        <div className ="movie-content-header">
  				<a href="#">
  					<h3 className="movie-title">Title</h3>
  				</a>
  			</div>

        <div className ="info-section">
  					<label>Director's Name</label>
  					<span>Release Date</span>
  			</div>
      </div>
    </div>
  );
}

export default Movie;
