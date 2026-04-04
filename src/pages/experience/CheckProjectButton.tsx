import styled from 'styled-components';
import config from '@/helpers/config.ts';
import colors from '@/helpers/colors.ts';

const em = config.em.bind(config);

const StyledButton = styled.div`
  --orange: #ff8201;
  overflow: hidden;
  display: flex;
  color: var(--orange);
  border: 0.2rem solid var(--orange);
  font-weight: 500;
  border-radius: 2.5rem;
  user-select: none;
  transition: 0.1s 0.3s;

  &:active {
    box-shadow:
      0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;

//. STYLED LINK - half of the `Site/Github` button
const StyledLink = styled.a`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: 0.1s 0.03s;
  font-size: 1.8rem;
  letter-spacing: 0.2rem;

  &:hover {
    color: white;
    background-color: ${colors.rgbOrange};
  }

  /* website link */
  &.site {
    padding-left: 2.6rem;
    padding-right: 2.6rem;

    &:hover + a {
      color: ${colors.rgbOrange};
      background-color: white;
    }

    @media (max-width: ${em(850)}em) {
      font-size: 1.8rem;
    }
    @media (max-width: ${em(500)}em) {
      font-size: 1.6rem;
    }
  }

  /* github link */
  &.github {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.3; /* center vertically */
    background-color: ${colors.rgbOrange};
    color: white;

    @media (max-width: ${em(850)}em) {
      font-size: 1.6rem;
      line-height: 1.3; /* center vertically */
    }
    @media (max-width: ${em(500)}em) {
      font-size: 1.4rem;
      line-height: 1.4; /* center vertically */
    }
  }
`;

interface Props {
  className: string;
  siteUrl: string;
  githubUrl: string;
}

const CheckProjectButton = (props: Props) => {
  const { className, siteUrl, githubUrl } = props;

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <StyledButton className={className}>
      {siteUrl && (
        <StyledLink className="site" href={siteUrl} {...linkProps}>
          Site
        </StyledLink>
      )}

      {githubUrl && (
        <StyledLink className="github" href={githubUrl} {...linkProps}>
          Github
        </StyledLink>
      )}
    </StyledButton>
  );
};

export default CheckProjectButton;
