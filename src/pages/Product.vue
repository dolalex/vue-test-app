<template>
  <v-container>
    <section class="product mt-3 elevation-10" v-if="!loading">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-img :src="product.imageSrc" class="product-image" alt=""></v-img>
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product-info">
            <h5 class="product-title display-1 mb-3 mt-3">{{product.title}}</h5>
            <p><span>Vendor:</span> {{product.vendor.charAt(0).toUpperCase() + product.vendor.substr(1)}}</p>
            <p><span>Price:</span> ${{product.price}}</p>
            <p><span>Color:</span> <span :title="purple" :style="{backgroundColor: product.color}" class="product-color-bg"></span></p>
            <p><span>Material:</span> {{product.material}}</p>
            <div>
              <p><span>Description:</span> {{product.description}}</p>
            </div>
            <app-edit-product :product="product" v-if="isOwner"></app-edit-product>
            <app-buy-dialog :product="product"></app-buy-dialog>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section v-else class="text-xs-center">
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
    </section>
  </v-container>
</template>

<script>
  import EditProduct from '../components/EditProduct'

  export default {

    props: ['id'],
    computed: {
      product() {
          const id = this.id;
          return this.$store.getters.productById(id)
      },
      loading() {
        return this.$store.getters.loading
      },
      isOwner () {
        return this.product.ownerId === this.$store.getters.user.id
      }
    },
    components: {
      appEditProduct: EditProduct
    }
  }
</script>

<style scoped>
  .product {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid #1c77ad;
    padding: 30px;
    margin-bottom: 100px;
  }

  .product-image {
    height: 100%;
    width: 550px;
  }

  .product-info {
    margin-left: 50px;
  }

  .product-title {
    font-size: 24px;
    font-weight: bold;
  }

  .product-color-bg {
    display: inline-block;
    width: 50px;
    height: 20px;
    border: 1px solid purple;
    border-radius: 10px;
  }

  p span {
    font-size: 16px;
    color: dodgerblue;
    font-weight: bold;
  }

</style>