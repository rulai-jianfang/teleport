import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LogoButton = ({
  src,
  version,
  ...rest
}) => {
  return (
    <StyledLogo {...rest}>
      <img src={src} />
      <em>v{version}</em>
    </StyledLogo>
  );
};

LogoButton.propTypes = {
  src: PropTypes.string,
  version: PropTypes.string,
};

LogoButton.defaultProps = {
  src: '/',
  version: 'v#',
}

LogoButton.displayName = 'LogoButton';

const StyledLogo = styled.a`
  background: none;
  border: none;
  border-bottom:  ${props => props.active ? `4px solid ${props.theme.colors.accent}` : 'none'};
  box-sizing: border-box;
  color: ${props => props.active ? props.theme.colors.light : 'rgba(255, 255, 255, .56)'};
  cursor: pointer;
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  line-height: ${props => props.active ? '68px' : '72px'};
  margin: 0;
  outline: none;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .3s;
  -webkit-font-smoothing: antialiased;
  width: 240px;

  &:hover {
    background:  ${props => props.active ? props.theme.colors.bgSecondary : 'rgba(255, 255, 255, .06)'};
    border-bottom:  ${props => props.active ? `4px solid ${props.theme.colors.accent}` : 'none'};
  }

  &:active, {
    background:  ${props => props.active ? props.theme.colors.bgSecondary : props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.light};
    border-bottom:  ${props => props.active ? `4px solid ${props.theme.colors.accent}` : 'none'};
  }

  img {
    display: inline-block;
    float: left;
    height: 24px;
    margin: 24px 0 24px 16px;
  }

  em {
    display: inline-block;
    font-size: 10px;
    font-weight: bold;
    font-style: normal;
    margin: 0;
  }
`;

export default LogoButton;