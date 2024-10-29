<template>
  <div class = "dashboard">
    <h1 class = "text-subtitle-1 text-grey">Dashboard</h1>
    <v-container class = "my-5">

      <v-row class = "mb-4 ml-3">

        <v-btn flat
               @click = "sortBy('work')"
               size = "small"
               class = "text-grey bg-grey-lighten-3">
          <v-icon start
                  size = "small">mdi-folder
          </v-icon>
          <v-tooltip activator = "parent"
                     location = "top">
            Sort Projects by Work
          </v-tooltip>
          <span class = "text-caption text-lowercase"> by Project Name</span>
        </v-btn>
        <v-btn flat
               @click = "sortBy('name')"
               size = "small"
               class = "text-grey bg-grey-lighten-3">
          <v-icon start
                  size = "small"
          >mdi-account
          </v-icon>
          <v-tooltip activator = "parent"
                     location = "top">
            Sort Projects by Person Name
          </v-tooltip>
          <span class = "text-caption text-lowercase"> by Person Name</span>
        </v-btn>
      </v-row>


      <v-card flat
              class = "pa-6">

        <v-row v-for = "project in projects"
               :key = "project.work"

               :class = "` project ${project.status}`">
          <v-col cols = "12"
                 sm = "6"
                 md = "4"
                 lg = "6">
            <v-sheet class = "text-caption text-grey"> Project title</v-sheet>
            <v-sheet>{{ project.work }}</v-sheet>
          </v-col>
          <v-col cols = "12"
                 sm = "6"
                 md = "4"
                 lg = "2">
            <v-sheet class = "text-caption text-grey"> Person</v-sheet>
            <v-sheet>{{ project.name }}</v-sheet>
          </v-col>
          <v-col cols = "12"
                 sm = "6"
                 md = "4"
                 lg = "2">
            <v-sheet class = "text-caption text-grey"> Due by</v-sheet>
            <v-sheet>{{ project.due }}</v-sheet>
          </v-col>
          <v-col cols = "12"
                 sm = "6"
                 md = "4"
                 lg = "2"

          >
            <v-chip :class = "` float-md-right text-white caption my-3 ${project.status} `">{{
                project.status
              }}
            </v-chip>


          </v-col>
          <v-divider/>
        </v-row>

      </v-card>
    </v-container>


  </div>
</template>

<script>


import ListProjects from "@/pages/ListProjects.vue";
import Team from "@/pages/Team.vue";

export default {
  components: {Team, ListProjects},


  data() {


    return {
      hola: 'hijoputa',
      projects: [
        {
          name: 'Roger',
          work: 'create all',
          due: '24 january 2024',
          status: 'ongoing',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
        },
        {
          name: 'Ricardo',
          work: 'write documentation',
          due: '23 february 2024',
          status: 'complete',
          content: 'elit. Asperiores culpa deleniti doloribus illum molestias, necessitatibus nulla praesentium. Cor'
        },
        {
          name: 'mauro',
          work: 'create database',
          due: '3 march 2024',
          status: 'overdue',
          content: 'poris deleniti esse et eveniet facilis nemo numquam reiciendis repellendus soluta vero. Placeat'
        },
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },


}
</script>

<style
  scoped>
.project {
  border-left: 4px solid;
}

.ongoing {
  border-left-color: orange;
}

.complete {
  border-left-color: green;
}

.overdue {
  border-left-color: red;
}


.v-chip.ongoing {
  background: orange;

}

.v-chip.complete {
  background: green;
}

.v-chip.overdue {
  background: red;
}
</style>
