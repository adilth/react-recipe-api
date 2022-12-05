import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 5000);
  }, []);
  const getCuisine = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_POON_API_KEY}&cuisine=${name}`
    );
    const data = await res.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })
      )}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 789px) {
    gap: 1rem;
  }
`;
const Card = styled(motion.div)`
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    object-fit: cover;
  }
  h4 {
    text-align: center;
    color: #434343;
    padding: 1rem;
  }
  p {
    color: #27ae60;
    text-align: center;
    text-decoration: underline;
  }
`;
export default Cuisine;
