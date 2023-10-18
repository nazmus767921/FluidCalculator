import styled from "styled-components";
import { H1 } from "./components/styledElements";
import {
  apply,
  conclusion,
  example,
  generate_css,
  getting_started,
  manage_calc,
  setting_up,
  user_guide,
} from "./constant";
import List from "./components/List";
import CodeBlock from "./components/CodeBlock";

const DocumentationPage = () => {
  return (
    <PageWrapper>
      <Container>
        {/* user guide */}
        <H1>{user_guide.title}</H1>
        <p>{user_guide.body}</p>
        {/* getting started */}
        <H1>{getting_started.title}</H1>
        <List type="ol" header={getting_started.points?.header}>
          {getting_started.points?.list}
        </List>
        {/* setting up */}
        <H1>{setting_up.title}</H1>
        <List type="ol" header={setting_up.points?.header}>
          {setting_up.points?.list}
        </List>
        {/* generate css */}
        <H1>{generate_css.title}</H1>
        <List type="ol" header={generate_css.points?.header}>
          {generate_css.points?.list}
        </List>
        {/* apply */}
        <H1>{apply.title}</H1>
        <List type="ol" header={apply.points?.header}>
          {apply.points?.list}
        </List>
        {/* manage calc */}
        <H1>{manage_calc.title}</H1>
        <List type="ul" header={manage_calc.points?.header}>
          {manage_calc.points?.list}
        </List>
        {/* example */}
        <H1>{example.title}</H1>
        <List type="ol" header={example.points?.header}>
          {example.points?.list}
        </List>
        <CodeBlock>{example.code}</CodeBlock>
        {/* conclusion */}
        <H1>{conclusion.title}</H1>
        <p>{conclusion.body}</p>
        {/* credits */}
        <H1>{"credits"}</H1>
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
