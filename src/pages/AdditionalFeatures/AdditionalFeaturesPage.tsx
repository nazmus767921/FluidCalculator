import styled from "styled-components";
import { H1 } from "../Documentation/components/styledElements";

const AdditionalFeaturesPage = () => {
  return (
    <PageWrapper>
      <Container>
        <H1>More Features Are Coming Soon, Devs!&#128196;</H1>
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;

  width: 70ch;

  ${H1} {
    text-align: center;
  }
`;

const PageWrapper = styled.div`
  padding: 3em 1.25em;

  min-height: 100vh;
  min-height: 100dvh;
`;

export default AdditionalFeaturesPage;
