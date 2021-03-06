import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 0.1875rem;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: tomato;
  margin: 1.25rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.625rem;
  background-color: white;
  color: #0e0c0c;
  cursor: pointer;
  border-radius: 5%;
  font-weight: 600;
`;

const categoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default categoryItem;
