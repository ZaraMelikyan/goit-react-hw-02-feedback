import React from 'react';
import {
  StyledContainer,
  StyledSectionTitle,
} from 'components/Section/Section.styled';
export default function Section({ title, children }) {
  return (
    <StyledContainer>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </StyledContainer>
  );
}