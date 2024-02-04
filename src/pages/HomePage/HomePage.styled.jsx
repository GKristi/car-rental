import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDescription = styled.p`
  max-width: 565px;
  min-width: 200px;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.6;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledHeading = styled.h1`
  text-transform: uppercase;
  font-size: 60px;
  line-height: 1.1;
  text-align: center;

  span {
    color: #3470ff;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 12px 99px;
  text-decoration: none;
  border-radius: 12px;
  background: #3470ff;
  color: white;
  transition: 200ms ease-in-out;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
