import React from "react";
import styled from "styled-components";

const Img = styled.div`
  text-align: center;
`;

const Images = (props) => {
  return (
    <Img {...props}>
      <img
        src={props.pic}
        alt="img"
        width={props.sun ? "100" : "50"}
        height="50"
      />
    </Img>
  );
};

export default Images;
