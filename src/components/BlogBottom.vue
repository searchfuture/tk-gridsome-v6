<template>
  <div class="bblogs">
  <b-card-group deck>
      <b-card
        v-for="item in bblogs" :key="item.node.id"
        :title="item.node.title"
        :img-src="item.node.thumbnail.src" 
        img-alt="Image"
        img-top
        :bg-variant="item.node.bgcolor"
        :text-variant="item.node.textcolor"
      >
        <b-card-text>
          <div v-html="item.node.content" />
        </b-card-text>
      </b-card>
  </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    bblogs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bblogs {
  background-color: #1693BE;
  padding: 1rem 2rem 1rem 2rem;
  align-content: center;
}

.card {
  color: white;
  background-color: transparent;
}

.card .card-body {
  padding: 1rem;
}

.card .card-img-top {
  width: 100%;
  padding: 1rem;
}
.card-deck .card {
  // max-width: calc(50% - 5px);
  background-color: transparent;
  border-style: none;
}



</style>
