import Styled from "styled-components";

const SectionWrapper = Styled.section`
  margin: 3rem 0;
  padding-top: 3rem;

`;

const Container = Styled.div`
  width: 100%;
  max-width: 960px;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;


  @media screen and (max-width: 992px) {
    max-width: 960px;
  }

  @media screen and (max-width: 768px) {
    max-width: 720px;
  }

  @media screen and (max-width: 576px) {
    max-width: 540px;
  }
`;

export { SectionWrapper, Container };
