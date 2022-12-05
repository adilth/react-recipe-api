import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Picker = () => {
  const [veg, setVegs] = useState([]);
  useEffect(() => {
    getVegs();
  }, []);
  const getVegs = async () => {
    const check = localStorage.getItem("veg");
    if (check) {
      setVegs(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_POON_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await res.json();
      console.log(data);
      localStorage.setItem("veg", JSON.stringify(data.recipes));
      setVegs(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>our Vegetarian Piker</h3>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              700: {
                perPage: 3,
                gap: "1.5rem",
              },
              520: {
                perPage: 2,
                gap: "1rem",
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {veg.map((rec) => {
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
  min-height: 24rem;
  border-radius: 1.7rem;
  overflow: hidden;
  margin-top: 0.8em;
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
    font-size: 1rem;
    height: 20%;
    text-align: center;
  }
`;
const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export default Picker;
