<template>
  <v-app>
    <v-app-bar app dense>
      <!-- Logo -->
      <v-row class="d-flex align-center">
        <v-img
          src="/images/logo-canin-pl.jpg"
          alt="Logo Canin première langue"
          contain
          height="80"
          width="80"
        ></v-img>
        <v-spacer></v-spacer>

        <!-- Icônes sociales : masquées sur mobile -->
        <v-btn  icon href="https://www.facebook.com" target="_blank" alt="Facebook">
          <v-icon color="black">mdi-facebook</v-icon>
        </v-btn>
        <v-btn  icon href="https://www.instagram.com" target="_blank" alt="Instagram">
          <v-icon color="black">mdi-instagram</v-icon>
        </v-btn>
      </v-row>

      <!-- Menu de navigation -->
      <v-spacer></v-spacer>
      <v-row v-if="!isMobile" class="d-flex align-center">
        <v-btn text to="/">Accueil</v-btn>
        <v-btn text to="/service">Service</v-btn>
        <v-btn text to="/temoignage">Témoignage</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-row>

      <!-- Menu hamburger pour mobile -->
      <v-menu v-if="isMobile" offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link to="/">
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/service">
            <v-list-item-title>Service</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/temoignage">
            <v-list-item-title>Témoignage</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDisplay } from 'vuetify';

export default defineComponent({
  name: 'App',
  setup() {
    const { smAndDown } = useDisplay();
    const isMobile = smAndDown;

    return { isMobile };
  },
});
</script>
