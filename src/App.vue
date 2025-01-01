<template>
  <v-app>
    <v-app-bar app>
      <!-- Partie gauche -->
      <v-row align="center" class="ml-3">
        <v-img
          src="/images/logo-canin-pl.jpg"
          alt="Logo Canin première langue"
          contain
          height="120"
          width="120"
        ></v-img>
        <v-spacer></v-spacer>
        <v-btn icon href="https://www.facebook.com" target="_blank" alt="Facebook">
          <v-icon color="black">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com" target="_blank" alt="Instagram">
          <v-icon color="black">mdi-instagram</v-icon>
        </v-btn>
      </v-row>

      <!-- Texte ASSOCIATION Loi 1901 -->
      <v-row align="center" class="ml-3">
        <v-toolbar-title class="text-h6 black--text">ASSOCIATION Loi 1901</v-toolbar-title>
      </v-row>

      <!-- Partie droite -->
      <v-spacer></v-spacer>
      <v-row align="center" class="mr-3">
        <v-btn text to="/">Accueil</v-btn>
        <v-btn text to="/service">Service</v-btn>
        <v-btn text to="/temoignage">Témoignage</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.v-row {
  align-items: center;
}

.ml-3 {
  margin-left: 1rem;
}

.mr-3 {
  margin-right: 1rem;
}
</style>




<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
