<template>
  <div class="blog-content" v-html="content" />
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>

<style lang="scss" scoped>
.blog-content {
  color: white;
  // background-color: #fae6e7;
  p {
    line-height: 1.5;
    font-size: 1.15rem;

  }
  h2 {
    font-size: 2rem;
    color: palegreen;
  }
  h3 {
    font-size: 1.5rem;
    color: palegreen;
  }

  h4, h5, h6 {
    font-size: 1.15rem;
    color: palegreen;
  }
}

.blogImage {
  align-items: center;
}
</style>
