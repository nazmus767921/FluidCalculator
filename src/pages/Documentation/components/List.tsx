import styled from "styled-components";

type Props = {
  children: string[] | undefined;
  header?: string;
  type: "ul" | "ol";
};

const List = ({ children, header, type }: Props) => {
  if (type === "ul") {
    return (
      <Ul>
        {header ? <p className="header">{header}</p> : null}
        {children?.map((item) => {
          return (
            <Li key={crypto.randomUUID()}>
              <p>{item}</p>
            </Li>
          );
        })}
      </Ul>
    );
  }
  if (type === "ol") {
    return (
      <Ol>
        {header ? <Header>{header}</Header> : null}
        {children?.map((item) => {
          return (
            <Li key={crypto.randomUUID()}>
              <p>{item}</p>
            </Li>
          );
        })}
      </Ol>
    );
  }
};

const Li = styled.li`
  margin-left: 3em;
  font-size: 80%;
  color: ${props=> props.theme.text};
`;

const Header = styled.p`
  margin-bottom: 1.5em;
`;

const Ul = styled.ul``;

const Ol = styled.ol``;

export default List;
