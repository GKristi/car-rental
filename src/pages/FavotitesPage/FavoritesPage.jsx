import { useSelector } from "react-redux";
import Advert from "../../components/Advert/Advert";
import {
  CatalogWrapper,
  StyledMessage,
} from "../CatalogPage/CatalogPage.styled";
import { selectFavorites } from "../../store/selectors";
import { Container } from "../../components/App/App.styled";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites?.length === 0 ? (
        <StyledMessage>
          You do not have any advertisments in your <span>favorites list</span>!
        </StyledMessage>
      ) : (
        <CatalogWrapper>
          {favorites?.map((advert) => (
            <Advert advert={advert} key={advert.id}></Advert>
          ))}
        </CatalogWrapper>
      )}
    </Container>
  );
};

export default FavoritesPage;
