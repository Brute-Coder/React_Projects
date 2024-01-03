import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
function Rating({ size = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="start-rating">
      {[...Array(size)].map((_, index) => {
        return (
          <div className="rating" key={index}>
            <FaStar
              onClick={() => {
                setRating(index + 1);
                console.log("got this in onclick ");
              }}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              className={index + 1 <= (hover || rating) ? "active" : "inactive"}
              size={40}
              //   style={{
              //     color: index + 1 <= (hover || rating) ? "orange" : "gray",
              //   }}
            />
          </div>
        );
      })}
      {rating > 0 ? (
        rating >= size - 3 ? (
          <span>
            <h3 style={{ color: "orange" }}>Thank You !!</h3>
          </span>
        ) : (
          <span>
            <h3 style={{ color: "white" }}>How We Can Improve ??</h3>
          </span>
        )
      ) : null}
    </div>
  );
}

export default Rating;
