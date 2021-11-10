import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  // const tempStars = Array.from({ length: 5 }, (_, index) => {
  //   const number = index + 0.5;
  //   return (
  //     <span key={index}>
  //       {stars >= index + 1 ? (
  //         <BsStarFill />
  //       ) : stars >= number ? (
  //         <BsStarHalf />
  //       ) : (
  //         <BsStar />
  //       )}
  //     </span>
  //   );
  // });

  const tempStars = (num) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      const number = i + 0.5;
      if (stars >= i + 1) {
        arr.push(
          <span>
            <BsStarFill />
          </span>
        );
      } else if (stars >= number) {
        arr.push(
          <span>
            <BsStarHalf />
          </span>
        );
      } else {
        arr.push(
          <span>
            <BsStar />
          </span>
        );
      }
    }

    return arr;
  };

  return (
    <Wrapper>
      <div className="stars">
        {tempStars(stars)} {stars}
      </div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
