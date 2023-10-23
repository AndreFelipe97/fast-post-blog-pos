import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/_layout"
import { Container, Paragraph, Title } from "../styles/pages/404/styles"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <Title>Página não encontrada</Title>
        <Paragraph>
          Desculpa 😔, Não encontramos o que você procura.
          <br />
          <Link to="/">Voltar para página principal</Link>.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
