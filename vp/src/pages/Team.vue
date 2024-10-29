<template>
  <h1 class = "text-subtitle-1 text-grey">Team</h1>

  <v-container class = "my-7">
    <v-row>
      <v-col cols = "12"
             sm = "6"
             md = "4"
             lg = "3"
             v-for = "person in team"
             :key = "person.name">
        <v-card flat
                class = "text-sm-center ma-4">
          <v-responsive class = "pt-4">
            <v-avatar size = "100"
                      class = "bg-grey-lighten-3">
              <v-img :src = "person.avatar"></v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class = "text-h6"> {{ person.name }}</div>
            <div class = "text-grey"> {{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat
                   class = "text-grey-darken-1">
              <v-icon size = "small"
                      start>mdi-message
              </v-icon>
              message
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>

export default {

  data() {


    return {
      team: [
        {name: 'Roger', role: 'Web Developer', avatar: '/roger.png'},
        {name: 'Mauro', role: 'BD Manager', avatar: '/MauroUser.png'},
        {name: 'Ricardo', role: 'Marketing', avatar: '/RicardoUser.png'}
      ]
    }
  }
}
</script>

<style
  scoped>


</style>
