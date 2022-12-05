import styled from "styled-components";
// import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Recipe = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [params.name]);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_POON_API_KEY}`
    );
    const res = await data.json();
    console.log(res);
    setDetails(res);
  };
  if (isLoading) {
    <Loader />;
  } else {
    return (
      <WrapperDetails>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
        </div>
        <Info>
          <div className="buttons">
            <Button
              className={active === "instructions" ? "active" : ""}
              onClick={() => setActive("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={active === "ingredients" ? "active" : ""}
              onClick={() => setActive("ingredients")}
            >
              Ingredients
            </Button>
          </div>
          {active === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {active === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ing) => (
                <li key={ing.id}>{ing.original}</li>
              ))}
            </ul>
          )}
        </Info>
      </WrapperDetails>
    );
  }
};

const WrapperDetails = styled.div`
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
  li {
    list-style-type: space-counter;
    font-size: 1.2rem;
    line-height: 2.5rem;
    &::marker {
      font-weight: bold;
      color: #27ae60;
    }
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 2rem;
  cursor: pointer;
  @media (max-width: 778px) {
    padding: 0.9em 1.2em;
    margin-right: 1rem;
  }
`;
const Info = styled.div`
  .buttons {
    display: flex;
  }
`;
export default Recipe;
