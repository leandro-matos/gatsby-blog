import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o administrador por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
      Sou fascinado pelo mundo da tecnologia desde os meus 15 anos quando comprei o meu primeiro computador. 
      Acredito que a motivação e o foco no aprendizado são a base para quem deseja ser um profissional da área de infraestrutura.
      </p>

      <p>
      Minha carreira começou no Senai, onde fiz um curso técnico de 02 anos de Redes de Computadores. 
      Primeiramente entendo os principais conceitos de redes, protocolos, arquiteturas, sistemas operacionais, governança e segurança da informação.
      </p>

      <p>
      No decorrer da minha carreira eu conclui duas graduações em Análise e Desenvolvimento de Sistemas e Gestão de Tecnologia da Informação, 
      me especializando mais em sistema operacional Linux e no mundo Open Source, principais ferramentas de administração do SO 
      e principais tecnologias que estão no âmbito do sistema com cursos de aperfeiçoamento e certificações. 
      Começei a desenvolver skills em programação, possuo conhecimentos em Python, Powershell e Shell Script.
      </p>

      <p>
      Conhecimentos em Git, Docker, Terraform, Puppet, Kubernetes, Apache, Nginx, Elk Stack, AWS, entre outros.
      Atualmente estou aprimorando cada vez mais habilidades em CI/CD, Observability, 
      Application Monitoring, Infrastructure Monitoring, Configuration Management e Cloud.
      </p>


      <p>
        Já passei por algumas empresas importantes que agregaram muito em minha carreira profissional, tais como: {' '}
         <a
          href="http://www.locaweb.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Locaweb
        </a>
        ,{' '}
        <a
          href="http://www.uoldiveo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UolDiveo
        </a>
        , {' '}
        <a
          href="http://www.pagseguro.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagseguro
        </a>
        {' e '}
        <a
          href="https://itau.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Itaú.
        </a>{' '}
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de ensinar e aprender coisas novas com meus amigos, acho que
        por isso nasceu esse blog.
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage