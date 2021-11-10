import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpg";
import heroBcg2 from "../assets/hero-bcg-2.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          for your
          <br />
          dream home
        </h1>
        <p>
          We provide the best comfortable experience for your dream house. We
          furnish the dreams where designs meet creativity to finely craft our
          statement of your perfect home.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  h1 {
    margin-bottom: 2rem;
    line-height: 60px;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 3rem;
    color: #473733;
    font-size: 1.2rem;
  }

  .hero-btn {
    padding: 0.75rem 3rem;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      line-height: 80px;
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 3rem;
    }
    .hero-btn {
      padding: 1rem 6rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
