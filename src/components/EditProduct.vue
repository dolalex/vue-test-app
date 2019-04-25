<template>
  <v-dialog width="400px" v-model="dialog">
    <v-btn color="primary" slot="activator">Edit</v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit Product</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                  name="title"
                  label="Title"
                  type="text"
                  v-model="editedTitle"
              >
              </v-text-field>
              <v-textarea
                  name="description"
                  label="Description"
                  type="text"
                  v-model="editedDescription"
              >
              </v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="onCancel" dark color="light-blue darken-4" outline>Cancel</v-btn>
              <v-btn @click="onSave" dark color="light-blue darken-4">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    props: ['product'],
    data() {
      return {
        dialog: false,
        editedTitle: this.product.title,
        editedDescription: this.product.description
      }
    },
    methods: {
      onCancel () {
        this.editedTitle = this.editedTitle,
        this.editedDescription = this.editedDescription,
        this.dialog = false
      },
      onSave () {
        if (this.editedTitle !== '' && this.editedDescription !== '') {
          this.$store.dispatch('updateProduct', {
            title: this.editedTitle,
            description: this.editedDescription,
            id: this.product.id
          })
          this.dialog = false
        }
      }
    }
  }
</script>