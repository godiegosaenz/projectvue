<template>
    <v-app id="inspire">
      <v-system-bar app>
        <v-spacer></v-spacer>

        <v-icon>mdi-square</v-icon>

        <v-icon>mdi-circle</v-icon>

        <v-icon>mdi-triangle</v-icon>
      </v-system-bar>
      <v-card
        app
        height="80"
      >
      hola
      </v-card>
      <v-app-bar 
      app
      color="indigo darken-2"
      dark
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
      <!--<v-app-bar
        color="indigo darken-2"
        dark
        dense
        max-height="60"
      >
        <v-container>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          
          <v-btn text to="/">Inicio</v-btn>
          <v-btn text to="/municipalidad">Municipalidad</v-btn>
          <v-btn text to="/actualidad">Actualidad</v-btn>
          <v-btn text to="/transparencia">Transparecia</v-btn>
          <v-btn text to="/contactanos">Contactanos</v-btn>
          

          <v-spacer></v-spacer>

          
        </v-container>
      </v-app-bar>-->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main class="grey lighten-3">
        
          <router-view> </router-view>
  
      </v-main>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      links: {
        
      },
      drawer: false,
      group: null,
      watch: {
      group () {
        this.drawer = false
      },
    },
    }),
  }
</script>