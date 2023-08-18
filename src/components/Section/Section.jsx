import { SectionTitle, SectionWrapper } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}
