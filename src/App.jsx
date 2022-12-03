import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { GiKnifeFork } from "react-icons/gi";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 4000);
  }, []);
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}>FoodRec</Logo>
          </Nav>
          <Hero />
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </div>
    );
  }
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", sans-serif;
  color: inherit;
`;

const Nav = styled.div`
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  color: #27ae60;
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1em;
  svg {
    font-size: 2rem;
  }
`;
export default App;
