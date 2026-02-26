<template>
  <v-app>
    <v-main class="formacao-main">
      <h1 class="formacao-title">{{$t('Formação')}}</h1>
      <v-container class="formacao-container" >
        <!-- Card -->
        <v-row justify="center" align="stretch" class="mt-4">
          <v-col 
            cols="12"
            sm="6"
            md="4"
            v-for="(card, index) in cards"
            :key="index"
          >
            <v-card class="formacao-card">
              <h3>{{ card.titulo }}</h3>
              <p>{{ card.descricao }}</p>
              <p>{{ card.mensage }}</p>
              <v-btn
                v-if="card.link"
                :href="card.link"
                target="_blank"
                variant="text"
                class="mt-2"
                color="primary"
              >
                Ver Projeto
              </v-btn>
            </v-card> 
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const cards = [
  {
    titulo: 'SENAI - Bragança Paulista',
    descricao: 'Curso Técnico em Mecânica de Usinagem',
    mensagem: 'Formação voltada para processos de usinagem convencional, com ênfase na operação de torno mecânico, fresadora e retificadora. Desenvolvimento de competências em metrologia, utilizando instrumentos de medição de precisão, além da interpretação e elaboração de desenhos técnicos mecânicos. O projeto final consistiu na fabricação de um foguete mecânico com base de fixação, aplicando conceitos de usinagem, tolerâncias dimensionais e acabamento superficial.',
    link: '',
  },
  {
    titulo: 'SENAI - Bragança Paulista',
    descricao: 'Curso de Torneiro Mecânico',
    mensagem: 'Curso complementar à formação em Mecânica de Usinagem, com foco no aprofundamento das técnicas de torneamento convencional. Desenvolvimento de habilidades na usinagem de peças fixadas entre pontas, execução de eixos excêntricos (virabrequim), polias e engrenagens de pequeno porte. Aplicação de conceitos de tolerâncias dimensionais, ajustes mecânicos e diferentes métodos de fixação e operação em torno mecânico. Ao longo do curso, foram realizados diversos projetos práticos para consolidação do aprendizado técnico.',
    link: '',
  },
  {
    titulo: 'SENAI - Bragança Paulista',
    descricao: 'Curso de Ferramentaria',
    mensagem: 'Formação integrando os conhecimentos adquiridos em Mecânica de Usinagem e Torneiro Mecânico, com foco na fabricação e ajuste de ferramentas e moldes. Desenvolvimento de competências em usinagem de precisão, montagem e ajustes dimensionais. O projeto final foi realizado em equipe, com divisão estratégica de tarefas para otimização do prazo e eficiência do processo. O trabalho consistiu na fabricação de um molde para injeção plástica de um moedor de alho, aplicando conceitos de cavidade, refrigeração, tolerâncias e acabamento, garantindo a conformidade da peça após o resfriamento do polímero injetado.',
    link: '',
  },
  {
    titulo: 'Instituto Federal de São Paulo - IFSP',
    descricao: 'Técnico em Mecatrônica',
    mensagem: 'Formação técnica com ênfase em eletrônica, automação industrial e programação. Durante o curso, aprofundei conhecimentos em circuitos eletrônicos, sistemas embarcados e lógica de controle. Tive meu primeiro contato com programação, iniciando com linguagem C e posteriormente Assembly, aplicadas a sistemas microcontrolados. Como projeto de conclusão de curso, desenvolvemos em equipe uma esteira seletora automatizada para separação de materiais (plástico e metal). O sistema utilizava Arduino para controle lógico e sensores para identificação dos materiais, realizando a separação automática. Também desenvolvi uma simulação no ambiente Coldsys.io, implementando a lógica de controle em linguagem Ladder (CLP), onde os produtos eram classificados por tamanho, reforçando conceitos de automação industrial e controle discreto.',
    link: '',
  },
  {
    titulo: 'SENAI - Bragança Paulista',
    descricao: 'Curso de Excel Completo',
    mensagem: 'Capacitação voltada ao uso avançado do Microsoft Excel para organização, análise e tratamento de dados. Aprimoramento na criação de planilhas estruturadas, utilização de funções avançadas, tabelas dinâmicas e recursos de análise para manipulação de grandes volumes de informações. O curso contribuiu para otimizar processos, aumentar a produtividade e melhorar a tomada de decisão por meio de relatórios mais organizados e eficientes.',
    link: '',
  },
  {
    titulo: 'Instituto Federal de São Paulo - IFSP',
    descricao: 'Análise e Desenvolvimento de Sistemas',
    mensagem: 'Graduação tecnológica com foco em desenvolvimento de software, arquitetura de sistemas e boas práticas de programação. Durante o curso, adquiri experiência prática com diferentes linguagens e tecnologias, aplicando conceitos de desenvolvimento front-end, back-end e mobile. Como projeto em equipe, desenvolvemos um fórum de livros, colocando em prática os conhecimentos adquiridos ao longo da formação. A aplicação contou com front-end em Vue.js, versão mobile desenvolvida em Flutter e back-end implementado em Java, utilizando arquitetura orientada a serviços e integração entre APIs. O projeto envolveu modelagem de banco de dados, autenticação de usuários e organização de conteúdo dinâmico.',
    link: '',
  },
]
</script>

<style scoped>
.formacao-title {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  margin-top: 20px;
}

.formacao-card {
  border-radius: 20px;
  padding: 30px;
}
</style>
