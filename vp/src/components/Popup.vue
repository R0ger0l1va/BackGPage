<template>
  <v-dialog max-width = "600px">
    <template v-slot:activator = "{props}">
      <v-btn flat
             v-bind = "props"
             class = "bg-success">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3>Add a new Project</h3>
      </v-card-title>
      <v-card-text>
        <v-form class = "px-3"
                ref = "form"
                @submit.prevent>
          <v-text-field label = "Title"
                        v-model = "title"
                        :rules = "nameRules"
                        color = "primary"
                        variant = "underlined"
          >
            <template v-slot:prepend>
              <v-icon>mdi-folder</v-icon>
            </template>
          </v-text-field>
          <v-textarea label = "Information"
                      variant = "underlined"
                      :rules = "nameRules"
                      color = "primary"
                      v-model = "content"
          >
            <template v-slot:prepend>
              <v-icon>mdi-pencil</v-icon>
            </template>
          </v-textarea>
          <v-date-input

            color = "primary"
            :rules = "nameRules"
            v-model = "due"
            variant = "underlined"
            label = "Due date"></v-date-input>
          <v-row class = "mt-4"
                 justify = "start">


            <v-col align-self = "start"
                   cols = "9">
              <v-btn flat

                     class = "bg-success mr-16"
                     @click = "validate">Add Project
              </v-btn>
            </v-col>

          </v-row>

        </v-form>
      </v-card-text>

    </v-card>

  </v-dialog>
</template>
<script>
export default {
  data() {

    return {
      nameRules: [v => !!v || 'Field is required', v => (v && v.length) >= 3 || 'Minimum length is 3 characters'
      ],
      title: '',
      content: '',
      due: null

    }

  },
  methods: {
    async validate() {
      const {valid} = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
  }
}
</script>
<style scoped>

</style>

