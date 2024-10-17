import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { H2 } from '@govuk-react/heading'

import PhaseBanner from '@govuk-react/phase-banner'
import ListNavigation from '@govuk-react/list-navigation';

const Banner = styled.div`
  background: black;
`
const WidthContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const AppName = styled(H2)`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 0;
`
const Navigation = styled(ListNavigation)`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0.5rem;

  &:hover {
    color: #5694ca;
  }
`

const PageHeader = () => (
  <div>
    <Banner>
      <WidthContainer>
        <AppName>Mini Data Hub</AppName>
        <Navigation>
          <StyledLink to="/">Companies</StyledLink>
          <StyledLink to="/">Contacts</StyledLink>
          <StyledLink to="/">Interactions</StyledLink>
        </Navigation>
      </WidthContainer>
    </Banner>
    <WidthContainer>
      <PhaseBanner level="alpha">
        This is an initial implementation of Mini Data Hub
      </PhaseBanner>
    </WidthContainer>
  </div>
);

export default PageHeader;