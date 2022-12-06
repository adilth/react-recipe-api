import styled from "styled-components";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [popular, setPopular] = useState([]);

  const getPop = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_POON_API_KEY}&number=4`
      );
      const data = await res.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  useEffect(() => {
    getPop();
  }, []);
  return (
    <HeroCont>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          height: "17rem",
          autoplay: "pause",
          speed: 400,
          rewind: true,
          // pauseOnHover: false, // must be false
          // pauseOnFocus: false, // must be false
          // resetProgress: false,
        }}
        hasTrack={false}
        aria-labelledby="autoplay-example-heading"
      >
        <SplideTrack>
          {popular.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <img src={rec.image} alt={rec.title} />
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </HeroCont>
  );
};

const HeroCont = styled.div`
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Hero;
