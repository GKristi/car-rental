import { Container } from "../../components/App/App.styled";
import car from "../../images/backgroundCar.png";
import {
  DescriptionWrapper,
  HomeWrapper,
  StyledDescription,
  StyledHeading,
  StyledLink,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <HomeWrapper>
        <DescriptionWrapper>
          <StyledHeading>
            Car <span>Rental</span> Company
          </StyledHeading>
          <StyledDescription>
            We are your trusted partner in the world of mobility. Here, you will
            find a diverse range of rental cars that meet the highest standards
            of comfort and safety. Our mission is to provide you with the best
            vehicle for your needs and ensure unforgettable travel experiences.
          </StyledDescription>
        </DescriptionWrapper>
        <img src={car} alt="Red Car" width="100%" height="100%" />
      </HomeWrapper>
      <StyledLink to="/catalog">Get Started</StyledLink>
    </Container>
  );
};

export default HomePage;
