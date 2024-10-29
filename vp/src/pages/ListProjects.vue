<template>
  <h1 class = "text-subtitle-1 text-grey">Projects</h1>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel v-for = "p in myProjects"
                         :key = "p.title"
      >
        <v-expansion-panel-title> {{ p.title }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card flat>
            <v-card-text class = "text-grey px-4">
              <div class = "font-weight-bold"> due by {{ p.due }}</div>
              <div>{{ p.content }}</div>
            </v-card-text>
          </v-card>


        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>


  </v-container>


</template>

<script>

import As from "@/components/LoginRegistrerSliderVuetify.vue";

export default {
  components: {As},


  data() {

    return {

      projects: [{
        title: 'Design a new Website',
        person: 'Roger',
        due: '1st Jan 2024',
        status: 'ongoing',
        content: 'Lorem ipsun dolor sit aperitas golj azm dje q'
      }, {
        title: 'Managing the Database',
        person: 'Mauro',
        due: '20th Jan 2024',
        status: 'completed',
        content: 'Lorem ipsun dolor sit aperitas golj azm dje q'
      }, {
        title: 'Make marketing',
        person: 'Ricardo',
        due: '10th Jan 2024',
        status: 'overdue',
        content: 'Lorem ipsun dolor sit aperitas golj azm dje q'
      }]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Roger'
      })
    }
  }
}
</script>

<style
>

</style>
