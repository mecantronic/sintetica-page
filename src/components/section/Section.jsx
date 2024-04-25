import { Title, Container } from "./section.styles";

function Section({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Section;
