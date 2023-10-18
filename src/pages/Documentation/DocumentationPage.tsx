import styled from "styled-components";
import { H1 } from "./components/styledElements";
import { getting_started, user_guide } from "./constant";
import List from "./components/List";

const DocumentationPage = () => {
  return (
    <PageWrapper>
      <Container>
        <H1>{user_guide.title}</H1>
        <p>{user_guide.body}</p>
        <H1>{getting_started.title}</H1>
        <List type="ol" header={getting_started.points?.header}>
          {getting_started.points?.list}
        </List>
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
`;

const PageWrapper = styled.div`
  padding: 3em 1.25em;

  min-height: 100vh;
  min-height: 100dvh;
`;

export default DocumentationPage;
