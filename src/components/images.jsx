import React from "react";
import styled from "styled-components";

const Img = styled.div`
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  padding-top: ${(props) => (props.bottom ? "12px" : "0")};
`;

const Images = (props) => {
  return (
    <Img {...props}>
      <img src={props.pic} alt="img" width="62" height="62" />
    </Img>
  );
};

export default Images;
