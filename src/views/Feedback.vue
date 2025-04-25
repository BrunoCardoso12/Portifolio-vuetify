<template>
  <v-app>
    <v-main class="feedback-main">
      <v-card class="w-75 mx-auto my-4 card-main">
        <v-card-text>
          <v-row justify="center">
            <v-col col="12" md="12" lg="6">
              <v-form style="justify-content: center;">
                <v-row justify="center" style="justify-content: space-between; gap: 10px;">
                  <h1>Feedback</h1>
                  <v-col cols="12">
                    <v-text-field
                    :label="$t('Nome')"
                    variant="outlined"
                    class="feedback-input"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                    :label="$t('Email')"
                    variant="outlined"
                    class="feedback-input"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12">
                    <v-textarea 
                    :label="$t('Mensagem')"
                    variant="outlined"
                    class="mensage-input"
                    ></v-textarea>
                  </v-col>
                  <v-btn
                    class="feedback-button"
                    @click="$emit('submit')"
                    color="secondary"
                    >
                    {{$t('Enviar')}}
                  </v-btn>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>


</script>

<style scoped>
h1 {
  border-radius: 10px; 
  padding: 0px 30px; 
  height: 40px;  
}

.card-main {
  border-radius: 10px;
  padding: 10px 0;
}

.feedback-input {
  border-radius: 5px;
  width: auto;
  height: 70%;
}

.mensage-input {
  border-radius: 5px;
  width: auto;
  height: 87%;
}

</style>
