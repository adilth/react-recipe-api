import image from "../images/loader.gif";
import styled from "styled-components";
// import { useEffect, useState } from "react";
const Loader = () => {
  //   const [change, setChange] = useState(true);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setChange(false);
  //     }, 3000);
  //     window.onload = interval;
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <ImgCont className="load">
      <img src={image} alt="loading screen contain food gif" />
    </ImgCont>
  );
};

const ImgCont = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 1;
  img {
    width: 28rem;
  }
`;
export default Loader;
