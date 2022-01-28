import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/`
    const header = (
      <h1
        style={{
          ...scale(1.5),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(40),
            padding: `${rhythm(0)} ${rhythm(3 / 4)} ${rhythm(1.5)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  header {
    color: #fff;
    background: rgb(22, 49, 66);
    padding: 100px 50px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    h1 {
      font-family: Montserrat, sans-serif;
      margin: 0;
      text-align: center;
    }
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
