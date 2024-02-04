import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1;
`;

export const ModalBackground = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  padding: 40px 36px;
  background-color: #fff;
  border-radius: 24px;

  img {
    border-radius: 14px;
    margin: 0 auto;
    margin-bottom: 14px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 4px;
    margin-bottom: 14px;
    width: 461px;

    li {
      color: rgba(18, 20, 23, 0.5);
      font-size: 12px;
      letter-spacing: -0.02em;
    }
  }

  h2 + ul {
    width: 277px;
  }

  li:not(:last-child)::after {
    content: "|";
    margin-left: 6px;
    color: rgba(18, 20, 23, 0.1);
  }

  p {
    line-height: 1.43;
    font-size: 14px;
    margin-bottom: 24px;
    width: 461px;
  }

  h3 {
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
  }

  span {
    color: #3470ff;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    border-radius: 12px;
    background: #3470ff;
    text-decoration: none;
    padding: 12px 50px;
    color: #fff;
    transition: 200ms ease-in-out;
  }

  a:hover,
  a:focus {
    background: #0b44cd;
  }
  li > span {
    font-weight: 600;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
