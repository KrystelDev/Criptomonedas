import signature from "../img/yooo.png";
import styled from "@emotion/styled";

const FooterFlex = styled.div`
  bottom: 0;
  display: flex;
  text-shadow: 0 0 0.02rem black, 0 0 0.8rem white;
  font-weight: bold;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    padding-left: 3rem;
  }
`;

const Signature = styled.img`
  height: 8vh;
  padding-right: 1rem;
`;

const P = styled.p`
  padding-left: 1rem;
`;

const Footer = ({ currantYear }) => {
  return (
    <FooterFlex>
      <P>Tots els drets reservats Copyright &copy; {currantYear} </P>
      <Signature src={signature} alt="Signat Krystel R"></Signature>
    </FooterFlex>
  );
};

export default Footer;
