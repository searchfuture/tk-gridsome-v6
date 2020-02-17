<template>
  <div class="">
    <div class="mt-2 latest-journals-heading container">
      <span class="label">Latest and greatest</span>
    </div>
    <b-card-group deck>
      <div v-for="item in journals" :key="item.node.id">
        <b-card
          :title="item.node.title"
          :img-src="$URL+item.node.thumbnail.src" 
          img-alt="Image"
          img-top
          :bg-variant="item.node.bgcolor"
          :text-variant="item.node.textcolor"             
        >
          <b-card-text>
            <div v-html="item.node.content" />
          </b-card-text>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    journals: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
}

.card {
  color: black;
  background-color: transparent;
}

.card .card-text {
  color: black;
}

.card .card-body {
  padding: 0.5rem;
}

.card .card-img-top {
  width: 100%;
  padding: 0;
}

.card-deck .card {
  max-width: 260px;
  background-color: transparent;
  border-style: none;
}

</style>