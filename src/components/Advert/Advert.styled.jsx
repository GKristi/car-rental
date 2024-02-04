import styled from "styled-components";

export const AdvertWrapper = styled.div`
  span {
    color: #3470ff;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;

  li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
  }

  li:not(:last-child)::after {
    content: "|";
    margin-left: 6px;
    color: rgba(18, 20, 23, 0.1);
  }
`;

export const CatalogImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AdvertItem = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    padding: 12px 99px;
    margin-top: auto;
  }
`;

export const FavoriteBtn = styled.button`
  padding: 0 !important;
  margin-top: 0 !important;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
`;
