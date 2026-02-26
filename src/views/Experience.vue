<template>
  <v-app>
    <v-main class="exp-main">
      <!-- Título -->
      <h1 class="exp-title">{{$t('Experiência')}}</h1>
      <v-container>
        <!-- Card -->
        <v-row justify="center" align="stretch" class="mt-4">
          <v-col 
            cols="12"
            sm="6"
            md="4"
            v-for="(card, index) in cards"
            :key="index"
          >
            <v-card class="exp-card">
              <h3>{{ card.titulo }}</h3>
              <p>{{ card.descricao }}</p>
              <p>{{ card.apresentacao }}</p>
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
    titulo: 'Farmina Pet Foods',
    descricao: 'Operador pleno',
    apresentacao: 'Iniciei minha trajetória profissional na Farmina como Auxiliar de Produção. Desde o início, destaquei-me pelo comprometimento, proatividade e dedicação às atividades da linha produtiva. Em pouco tempo, passei a apoiar o líder de linha em tarefas operacionais e organizacionais, sendo posteriormente designado para substituí-lo durante seu período de férias. Com aproximadamente um ano de atuação, fui promovido a Operador Júnior, assumindo a responsabilidade por uma linha de produção. Após a modernização do setor e a transição para um sistema automatizado, evoluí para o cargo de Operador Pleno, passando a operar e acompanhar o novo processo produtivo automatizado. Ao perceber que havia alcançado o limite de crescimento técnico dentro da função operacional, decidi investir na minha qualificação profissional, iniciando o curso Técnico em Mecatrônica, com foco em automação e tecnologia industrial.',
    link: '',
  },
  {
    titulo: 'Starclave',
    descricao: 'Técnico em Mecatrônica II',
    apresentacao: 'Após a conclusão do curso Técnico em Mecatrônica, ingressei na empresa Starclave, onde atuei por aproximadamente dois anos na área de manutenção técnica. Durante esse período, trabalhei com manutenção preventiva e corretiva em equipamentos hospitalares, realizando diagnósticos e intervenções nas áreas elétrica e mecânica. A função exigia alta responsabilidade, precisão técnica e disponibilidade para viagens frequentes, já que os atendimentos eram realizados in loco em diferentes localidades. A experiência proporcionou grande desenvolvimento em análise de falhas, resolução de problemas e autonomia técnica. No entanto, devido à rotina intensa de deslocamentos e longos períodos fora de casa, decidi direcionar minha carreira para a área de Tecnologia da Informação, buscando maior proximidade com a família e oportunidades alinhadas ao trabalho remoto e ao desenvolvimento de software.',
    link: '',
  },
  {
    titulo: 'Concept',
    descricao: 'Eletricísta Industrial',
    apresentacao: 'Bruno dos Santos Cardoso, 24 anos, estudante de Engenharia de Software na Universidade Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, sou apaixonado por resolver problemas e criar soluções inovadoras.',
    link: '',
  },
   {
    titulo: 'Treetech',
    descricao: 'Estágiario de Engenharia de Middleware',
    apresentacao: 'Bruno dos Santos Cardoso, 24 anos, estudante de Engenharia de Software na Universidade Federal do Maranhão (UFMA). Sou um desenvolvedor web com experiência em Vue.js e React.js. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, sou apaixonado por resolver problemas e criar soluções inovadoras.',
    link: '',
  }
]

</script>

<style scoped>
.exp-title {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  margin-top: 20px;
}

.exp-card {
  border-radius: 20px;
  padding: 30px;
}
</style>
