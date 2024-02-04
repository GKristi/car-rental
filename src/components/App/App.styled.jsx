import styled from "styled-components";

export const Button = styled.button`
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: 200ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background: #0b44cd;
  }
`;

export const Container = styled.div`
  padding: 0 128px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
