import React from "react";
import "./rightnav.css";
import styled from "styled-components";

const Div = styled.div`
  @media screen and (max-width: 980px) {
    .nav-links {
      flex-direction: column;
      align-items: center;
      padding-top: 6rem;
      background: rgb(28, 35, 66);
      background: radial-gradient(
        circle,
        rgba(28, 35, 66, 1) 0%,
        rgba(20, 2, 56, 1) 100%
      );
      position: fixed;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Div open={open}>
      <div className="nav-links">
        <a href="https://chronoly.io/" className="link">
          Website
        </a>
        <button className="btn">Buy $QTH</button>
        <button className="btn">Connect wallet</button>
      </div>
    </Div>
  );
};

export default RightNav;
