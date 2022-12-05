import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPop();
  }, []);
  const getPop = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_POON_API_KEY}&number=9`
      );
      const data = await res.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data);
      setPopular(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Piker</h3>
        <Splide
          options={{
            perPage: 5,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              767: {
                perPage: 3,
                gap: "1.5rem",
              },
              640: {
                perPage: 2,
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {popular.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Card>
                  <Link to={"/recipe/" + rec.id}>
                    <p>{rec.title}</p>
                    <img src={rec.image} alt={rec.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  margin-top: 0.8em;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 90%;
    font-weight: 600;
    text-align: center;
    font-size: 0.95rem;
    height: 20%;
  }
`;
const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;
export default Popular;
