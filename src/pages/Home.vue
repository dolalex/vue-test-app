<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
              delimiter-icon="stop"
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
          >
            <v-carousel-item
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
            v-for="(product, i) in products"
            :key="i"
            xs12
            sm6
            md4
        >
          <v-card>

            <router-link
                :aria-label="product.title"
                :to="'/product/' + product.id"
            >
              <v-card-media style="padding: 15px">
                <v-img :src="product.imageSrc" height="250px"></v-img>
              </v-card-media>

            </router-link>

            <v-card-title primary-title>
              <div>
                <h3 class="card-heading heading">{{product.title}}</h3>
                <div class="card-describe">
                  <p class="subheading">{{product.description.substring(0, 60)}}</p>
                  <p class="subheading card-price"><span class="title">Price:</span> ${{product.price}}</p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" round outline :to="'/product/' + product.id">Description</v-btn>
              <app-buy-dialog :product="product"></app-buy-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else="">
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            :size="70"
            :width="7"
            color="blue"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    computed: {
      promoProducts () {
        return this.$store.getters.promoProducts
      },
      products() {
        return this.$store.getters.products
      },
      loading() {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>
  .card-heading {
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .card-describe {
    margin-top: auto;
    padding-left: 1rem;
  }

  .card-price {
    color: #c00f1b;
    font-size: 18px;
  }

  img {
    max-width: 100%;
  }
</style>