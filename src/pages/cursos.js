import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const Cursos = () => (
  <Layout>
    <SEO
      title="Meus Cursos"
      description="Saiba um pouco mais sobre o administrador por trás deste blog."
    />
    <MainContent>
     
    <h2>Certificações</h2>

      <ul>
        <li><a href="https://drive.google.com/open?id=1VyDaxP63QPL-SqUG81Caf6R8AbIpeOM7"
            target="_blank">Comptia Linux+ (Powered By LPI)</a></li>

        <li><a href="https://drive.google.com/open?id=1VyDaxP63QPL-SqUG81Caf6R8AbIpeOM7"
            target="_blank">Linux Professional Institute - LPIC1</a></li>

        <li><a href="https://drive.google.com/open?id=1VyDaxP63QPL-SqUG81Caf6R8AbIpeOM7"
            target="_blank">Linux Professional Institute - Linux Essentials</a></li>

        <li><a href="https://drive.google.com/open?id=1VyDaxP63QPL-SqUG81Caf6R8AbIpeOM7"
            target="_blank">Comptia IT Fundamentals</a></li>

        <li><a href="https://drive.google.com/open?id=1VyDaxP63QPL-SqUG81Caf6R8AbIpeOM7"
            target="_blank">MTA - Microsoft Technology Associate: 98-366 Networking Fundamentals</a></li>

      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default Cursos