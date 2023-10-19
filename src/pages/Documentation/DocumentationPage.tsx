import styled from "styled-components";
import { Block, H1, H3 } from "./components/styledElements";
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
        <H1>{user_guide.title}&#128196;</H1>
        <p>{user_guide.body}</p>
        {/* getting started */}
        <H1>{getting_started.title}&#9996;</H1>
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
        {/* study Fluid typo */}
        <H1>Learn More about Fluid Typography</H1>
        <p>
          If you want to learn more about fluid typography, I recommend reading
          the article{" "}
          <a href="https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/">
            Fluid vs Responsive Typography: CSS Clamp.
          </a>{" "}
          It provides additional insights into the benefits and implementation
          of fluid typography.
        </p>
        {/* credits */}
        <H1>{"credits"}</H1>
        <ul>
          <Li>
            <p>
              This calculator was made using the theory of{" "}
              <span>
                <a href="https://www.aleksandrhovhannisyan.com/blog/fluid-type-scale-with-css-clamp/">
                  Aleksandr Hovhannisyan's blog post on fluid type scale with
                  CSS clamp.
                </a>
              </span>{" "}
            </p>
          </Li>
          <Li>
            <p>
              The website design is inspired by{" "}
              <span>
                <a href="https://wizardry-technique.webflow.io/">
                  Wizardry Technique developed by Timothy Ricks.
                </a>
              </span>{" "}
            </p>
          </Li>
        </ul>
        {/* Dev Info */}
        <H3>Developer Info:</H3>
        <p>
          This project was developed by <Block>Nazmus Sakib</Block>{" "}
          {"( Co-founder "}
          <a href="https://t.me/founded_404">404_founded</a>
          {")"}. If you have any technical questions or need to report a bug,
          please reach out to me at{" "}
          <a href="mailto:nazmus767921@gmail.com">nazmus767921@gmail.com</a>.
          Thank you for using the website!
        </p>
      </Container>
    </PageWrapper>
  );
};

const Li = styled.li`
  margin-left: 3em;
  font-size: 85%;
  color: ${(props) => props.theme.text};
`;

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
  p {
    color: ${(props) => props.theme.text};
    opacity: 0.8;
  }
  a {
    color: ${(props) => props.theme.input};
  }

  ${H3} {
    margin-top: 5em;
  }
`;

export default DocumentationPage;
