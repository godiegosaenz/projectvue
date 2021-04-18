<template>
    <v-app id="inspire">
      <v-system-bar
          window
          light
        >
        <v-container class="text-lg-right">
          <v-icon>mdi-message</v-icon>
          <span>10 unread messages</span>
        
          <v-icon>mdi-minus</v-icon>
          <v-icon>mdi-checkbox-blank-outline</v-icon>
          <v-icon >mdi-email</v-icon>
          
        </v-container>
      </v-system-bar>
      <v-card
        class=""
        height="80"
      >
      </v-card>
      <v-app-bar
        color="blue darken-4"
        dark
      >
        <v-container class="py-0 fill-height">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Menu</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn text to="/">Inicio</v-btn>
            <v-btn text to="/municipalidad">Municipalidad</v-btn>
            <v-btn text to="/actualidad">Actualidad</v-btn>
            <v-btn text to="/transparencia">Transparecia</v-btn>
            <v-btn text to="/contactanos">Contactanos</v-btn>
        </v-container>
      </v-app-bar>
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
        <v-container>
          <router-view></router-view>
        </v-container>
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