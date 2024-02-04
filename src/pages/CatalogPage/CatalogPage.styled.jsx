import styled from "styled-components";

export const CatalogWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const StyledMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  opacity: 0.6;

  span {
    color: #3470ff;
  }
`;
