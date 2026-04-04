import styled from 'styled-components';
import themes from '@/components/navbar/navbarButton-themes.tsx';
import colors from '@/helpers/colors.ts';

const StyledImageLink = styled.a`
  padding: 2.2rem;
  background-color: ${colors.rgbOrange};

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: ${themes.small.borderRadius};
  }
`;
const ImageLink = (props) => {
  // website url and github url
  const { siteUrl, children, className } = props;

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <StyledImageLink className={className} href={siteUrl} {...linkProps}>
      {children}
    </StyledImageLink>
  );
};

export default ImageLink;
