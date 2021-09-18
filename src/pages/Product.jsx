import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import Img from "../images/Sneakers.jpg";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 3.125rem;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 3.125rem;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 1.25rem 0rem;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 1.875rem 0rem;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0rem 0.3125rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.625rem;
  padding: 0.3125rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0.3125rem;
`;

const Button = styled.button`
  padding: 0.9375rem;
  border: 0.125rem solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
    transition: all 0.5s ease;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src={Img} />
        </ImageContainer>
        <InfoContainer>
          <Title>Gym Sneakers</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni
            provident commodi earum assumenda cupiditate mollitia asperiores est
            tempore, adipisci repellendus veritatis porro eius qui voluptatum,
            eum voluptas sapiente maxime?
          </Desc>
          <Price> $ 40</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
