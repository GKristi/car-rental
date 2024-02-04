import { StyledLoadMore } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ downloadMore }) => {
  return <StyledLoadMore onClick={downloadMore}>Load more</StyledLoadMore>;
};

export default LoadMoreBtn;
