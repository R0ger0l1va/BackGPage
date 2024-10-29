<template>
  <nav>
    <v-app-bar prominent
               class = "bg-grey-lighten-3"
               flat>
      <v-app-bar-nav-icon color = "grey"
                          @click = "drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class = "text-uppercase text-grey">
        <span class = "font-weight-light">Hola</span>
        <span>Mundo</span>
      </v-toolbar-title>
      <v-spacer/>
      <!--  MENU    -->
      <v-menu>

        <template v-slot:activator = "{ props }">
          <v-btn

            v-bind = "props"
            flat
            color = "grey"
          >
            <v-icon>mdi-menu-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for = "link in links"
            :key = "link.text"
            router
            :to = "link.route"
            color = "primary"

          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn color = "grey">
        <span>Sign Out</span>
        <v-icon end
                size = "large">mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model = "drawer"
                         class = "bg-primary"
                         location = "start"
                         :location = "$vuetify.display.mobile ? 'bottom' : undefined"
    >
      <v-row justify = "center"
             class = "mt-8 mb-3">

        <v-col cols = "5">
          <v-avatar size = "80"
                    class = "bg-grey-lighten-3">
            <v-img src = "/roger.png"></v-img>
          </v-avatar>
          <p class = "text-white text-h6 mt-3 ml-3">Roger</p></v-col>

      </v-row>
      <v-row class = "mt-3 mb-4"
             justify = "center">
        <popup/>
      </v-row>
      <v-list density = "default"
              nav>
        <v-list-item v-for = "link in links"
                     :key = "link"
                     :to = "link.route"
                     color = "white"
                     rounded = "xl"
                     router
        >
          <template v-slot:prepend>
            <v-icon class = "text-white"
            >{{ link.icon }}
            </v-icon>
          </template>
          <v-list-item-title class = "text-white"
                             v-text = "link.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>

</template>

<script>
import Popup from "@/components/Popup.vue";

export default {
  components: {Popup},
  data() {


    return {
      drawer: false,

      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-folder', text: 'My Projects', route: '/listprojects'},
        {icon: 'mdi-account-group', text: 'My Team', route: '/team'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
