import styled from "styled-components";
import {
  Twitter,
  LinkedIn,
  Instagram,
  Facebook,
  Room,
  Phone,
  AlternateEmail,
} from "@material-ui/icons";

import Img from "../images/Payment2.PNG";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 1.25rem 0rem;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.25rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h3`
  margin-block: 1.875rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.625rem;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
  /* height: 20%; */
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kimura</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          et dicta laborum incidunt sed maxime quas ad eveniet reiciendis autem
          eaque accusamus nisi, distinctio facere illo quo, unde explicabo sint!
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem> Man Fashion</ListItem>
          <ListItem> Women Fashion</ListItem>
          <ListItem> Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          666 Nairobi , Kenya.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          072000000
        </ContactItem>
        <ContactItem>
          <AlternateEmail style={{ marginRight: "10px" }} />
          contact@kimura.dev
        </ContactItem>
        <Payment src={Img} />
      </Right>
    </Container>
  );
};

export default Footer;
