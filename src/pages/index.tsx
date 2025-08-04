import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  backgroundColor: "#c5e7dc",
  color: "#293134",
  padding: 96,
  fontFamily: "'Epilogue', sans-serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontWeight: 400,
  fontSize: 48,
  fontFamily: "'Fraunces', sans-serif"
}

const headingAccentStyles = {
  color: "#d85144", // red accent
}

const paragraphStyles = {
  marginBottom: 48,
  color: "#293134",
}

const codeStyles = {
  color: "#0d6060",
  padding: 4,
  backgroundColor: "#f4f6f3",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const doclistStyles = {
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  color: "#60162c",
}

const linkStyle = {
  color: "#0d6060",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#293134",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const yellowBoxStyle = {
  backgroundColor: "#ffdb99",
  color: "#293134",
  padding: 20,
  borderRadius: 8,
  marginTop: 48,
  fontFamily: "'Epilogue', sans-serif",
  fontWeight: "bold",
  textAlign: "center" as "center",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Good Morning!
      </h1>
      <div style={yellowBoxStyle}>This is your featured yellow area. Customize me!</div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
