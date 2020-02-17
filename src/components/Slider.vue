<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ff6c70"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide    
      v-for="item in sliders"
      :key="item.node.id"
      :caption="item.node.title"
      :text="item.node.content"
      :img-src="$URL+item.node.thumbnail.src"
      img-alt="Name image"
    ></b-carousel-slide>

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
      </p>
    </b-carousel-slide> -->
  </b-carousel>
</template>

<script>
export default {
  props: {
    sliders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.greet-image {
  display: block;
  margin: auto;
  width: 98vw;
  max-width: 1024px;
}
</style>