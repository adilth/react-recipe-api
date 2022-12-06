import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <FaSearch />
      </div>
    </FormStyle>
  );
};
const FormStyle = styled.form`
  margin: 2em auto 0;
  width: 50%;

  div {
    position: relative;
    width: 100%;
  }
  input {
    background: linear-gradient(35deg, #494949, #313131);
    border: none;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.9rem 2.5rem;
    border-radius: 0.9rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
