import styled from "styled-components";
import { H1 } from "./components/styledElements";
import { user_guide } from "./constant";

const DocumentationPage = () => {
  return (
    <PageWrapper>
      <Container>
        <H1>{user_guide.title}</H1>
        <p>{user_guide.body}</p>
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  width: calc(100% - 20em);
  border: 1px solid;
`;

const PageWrapper = styled.div`
  padding: 3em 1.25em;

  min-height: 100vh;
  min-height: 100dvh;
`;

export default DocumentationPage;
