import React from 'react'
import styled from 'styled-components'
import { Container } from 'components'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { color } from 'theme'

const StyledHeader = styled.header`
  img {
    max-width: 26px;
    display: inline-block;
  }
  
  h1 {
    color: ${color.background};
    display: inline-block;
    font-size: 16px;
    font-weight: lighter;
    margin: 0 10px;
  }
  
  ${Container} {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    user-select: none;
  }
  
  a {
    display: flex;
    width: 200px;
  }
`

export default function Header () {
  return (
    <StyledHeader>
      <Container>
        <Link to='/'>
          <img src={logo} alt='Option Builder' />
          <h1>Option Builder</h1>
        </Link>
      </Container>
    </StyledHeader>
  )
}
