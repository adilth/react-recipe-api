import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/mexican"}>
        <GiNoodles />
        <h4>Mexican</h4>
      </SLink>
      <SLink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h4>japanese</h4>
      </SLink>
    </List>
  );
};
const List = styled.div`
  display: flex;
  justify-content: center;
`;
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  @media (max-width: 768px) {
    margin-right: 0.7rem;
    width: 5rem;
    height: 5rem;
  }
  h4 {
    color: #fff;
    font-size: 0.8em;
    margin-top: 0.4em;
  }
  svg {
    color: #fff;
    font-size: 1.2em;
  }
  &:active,
  &.active {
    background: linear-gradient(to right, #27ae60, #30965a);
    h4 {
      color: #fff;
    }
    svg {
      color: #fff;
    }
  }
`;
export default Category;
