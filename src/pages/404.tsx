import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/_layout"
import { Container } from "../styles/pages/404/styles"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <h1 style={headingStyles}>Página não encontrada</h1>
        <p style={paragraphStyles}>
          Desculpa 😔, Não encontramos o que você procura.
          <br />
          <Link to="/">Voltar para página principal</Link>.
        </p>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
