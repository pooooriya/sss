import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: calc(100% - 80px);
  margin: 65px auto;
`;
export const Card = styled.div`
  width: 200px;
  height: 250px;
  background-color: #fae5fc;
  border-radius: 20px;
  position: relative;
  margin: 10rem 10rem;
`;
export const Image = styled.img`
  src: ${(props) => props.src};
  width: auto;
  height: 150px;
  position: absolute;
  top: -55px;
  right: 30px;
`;
