import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  display: table;
  border-spacing: 2px;
  border-collapse: collapse;
  color: #ffd700;
`;

export const Category = styled.tr`
  border-bottom: 3px solid rgb(255, 76, 19);
  height: 45px;
  margin: 5px;
`;

export const Balance = styled.tr`
  border-bottom: 3px solid greenyellow;
  height: 45px;
  margin: 5px;
`;

export const CurrentCategory = styled.tr`
  border-bottom: 3px solid rgb(255, 76, 19);
`;

export const TitleCategory = styled.h4`
  margin: 10px 0px 10px 0px;
  color: yellowgreen;
`;

export const Value = styled.td`
  text-align: right;
`;
