<template>
  <div class="mt-2">
    <!-- <b-card-group deck>
      <div v-for="item in projects" :key="item.node.id">
        <b-card
          bg-variant="white"
          :title="item.node.title"
          :img-src="'http://localhost:8080'+item.node.thumbnail.src"
          img-alt="Image"
          img-left
        >
          <b-card-text>
            <div v-html="item.node.content" />
          </b-card-text>
        </b-card>
      </div>
    </b-card-group> -->
    <div>
      <b-card v-for="item in projects" :key="item.node.id" >
        <b-row no-gutters align-v="center" >
          <b-col  class="col-img">
            <b-img   center :src="item.node.thumbnail.src" class="img-content"></b-img>
          </b-col>
          <b-col>
            <b-card-body :title="item.node.title">
              <b-card-text>
                <div v-html="item.node.content" />
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
   
    <!-- <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col col lg="4">1 of 3</b-col>
        <b-col cols="12" md="auto">Variable width content</b-col>
      </b-row>

    </b-container> -->
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
// .projects {
//   max-width: 1024px;
// }
.card {
  color: black;
  background-color: white;
  // margin: 0.25rem;
}

// .card .card-text {
//   color: black;
// }

// .card .card-body {
//   padding: 0.5rem;
// }

// .card .card-img {
//   max-width: 300px;
//   max-height: 200px;
//   padding: 0;
// }

// .card-deck .card {
//   // max-width: 260px;
//   background-color: transparent;
//   border-style: none;
// }
// .col-md-6 {
//   vertical-align: middle;
//   align-items: center;
// }

.img-content {
  max-width: 300px;
  max-height: 300px;
  // border-radius: 1rem;
}

// .col-img {
//   padding-right: 1.5rem;
// }


</style>