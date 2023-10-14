import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFrete } from "../feature/sigleFreteSlice/singleFreteSlice";
import Btn from "../animatedContent/Btn";
import { styled } from "styled-components";

const TestingThings = ({ createdAt }) => {
  return <Wrapper></Wrapper>;
};
const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;
//style={{height:'100vh'}}
export default TestingThings;
