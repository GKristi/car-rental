import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;

  button {
    padding: 14px 44px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;

  input {
    outline: none;
    border: none;
    width: 160px;
    height: 48px;
    padding-left: 24px;
    background: #f7f7fb;
    border-radius: 0px 14px 14px 0px;
    padding-left: 70px;
  }

  input:first-child {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0px 0px 14px;
  }
`;

export const StyledPlaceholderOne = styled.p`
  position: absolute;
  top: 14px;
  left: 24px;
  color: #121417;
  font-weight: 500;
  line-height: 1.11;
  font-size: 18px;
`;

export const StyledPlaceholderTwo = styled.p`
  position: absolute;
  top: 14px;
  right: 115px;
  color: #121417;
  font-weight: 500;
  line-height: 1.11;
  font-size: 18px;
`;
