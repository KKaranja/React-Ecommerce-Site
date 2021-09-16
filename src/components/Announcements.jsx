import styled from "styled-components";

const Container = styled.div`
  height: 1.875rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <Container>
      <p>Super Deal! Free Shipping On Orders Over $50.</p>
    </Container>
  );
};

export default Announcements;
