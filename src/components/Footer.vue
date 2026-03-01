<template>
  <v-footer class="footer" height="28" color="grey-darken-4" app>
    <div class="footer-content text-center">
      <span>&copy; {{ new Date().getFullYear() }} Bruno Cardoso. {{ $t('Todos os direitos reservados.') }}</span>
    </div>
  </v-footer>
</template>
<style scoped>
.footer {
  font-size: x-small;
  min-height: 28px;
  padding: 0 !important;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 1;
}
</style>