/*
 ** 'Experience' page react component
 */

import styled from 'styled-components';
// import Page from 'page-transition/Page';
import colors from '@/helpers/colors.ts';
import ProjectBox from '@/pages/experience/ProjectBox';
import config from '@/helpers/config.ts';

const em = config.em.bind(config);
const {
  youTubeMagic,
  bayer,
  nbbMobile,
  tradingBot,
  freshLife,
  meals,
  roofland,
} = config.experience.projects;

const StyledPage = styled.div`
  padding: 3rem 3rem 3rem 16rem;
  background-color: #eee;
  & ::selection {
    background-color: ${colors.rgbOrange};
  }
  @media (max-width: ${em(1100)}em) {
    padding: 10.7rem 3rem 3rem 3rem;
  }
  @media (max-width: ${em(650)}em) {
    padding: 10.7rem 3rem;
  }
  @media (max-width: ${em(500)}em) {
    padding: 8.2rem 1rem;
  }
  @media (max-width: ${em(400)}em) {
    padding-top: 7.2rem;
  }
`;

const StyledProjectBoxesContainer = styled.div`
  margin-left: 11rem;
  max-width: 100rem;

  @media (max-width: ${em(1100)}em) {
    margin-left: 0;
  }
`;

export default function Experience(props) {
  const { pageTitle } = props;

  const ExperiencePage = (
    <StyledPage>
      <StyledProjectBoxesContainer>
        <ProjectBox project={youTubeMagic} />
        <ProjectBox project={bayer} />
        <ProjectBox project={nbbMobile} />
        <ProjectBox project={tradingBot} />
        <ProjectBox project={freshLife} />
        <ProjectBox project={meals} />
        <ProjectBox project={roofland} />
      </StyledProjectBoxesContainer>
    </StyledPage>
  );

  // return <Page>{ExperiencePage}</Page>;
  return ExperiencePage;
}
