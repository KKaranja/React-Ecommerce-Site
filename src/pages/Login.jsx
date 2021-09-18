import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/online-grocery-shopping-and-online-supermarket-picture-id1257828882?s=612x612")
      center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 1.25rem;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 0.625rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 0.625rem;
`;

const Link = styled.a`
  margin: 0.3125rem 0rem;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SING IN</Title>
        <Form>
          <Input placeholder='User Name' />
          <Input placeholder='Password' />
          <Button>LOGIN</Button>
          <Link>HAVE YOU FORGOTTEN YOUR PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
