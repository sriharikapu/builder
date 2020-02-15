import styled from 'styled-components'
import { media } from 'theme'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  ${media.xs.up`max-width: 540px;`}
  ${media.sm.up`max-width: 720px;`}
  ${media.md.up`max-width: 960px;`}
  ${media.lg.up`max-width: 1140px;`}
`

export default Container
