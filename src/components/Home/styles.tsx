import styled from "styled-components";

export const Container = styled.main`
  padding: 25px 10px;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  color: tomato;
`;

export const SubHeading = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #aaa;
  margin-top: 10px;
`;

export const MultiplierWrapper = styled.div`
  margin: 20px auto;
  max-width: 800px;
  display: grid;
  grid-gap: 5px;

  grid-template-columns: repeat(1, 1fr);

  @media only screen and (min-width: 480px) and (max-width: 849px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
