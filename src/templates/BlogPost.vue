<template>
  <Layout>
    <div class="blogPost">
      <div v-if="$page.post.image">
        <g-image immediate class="blogImage mb-4" :src="$page.post.image" />
      </div>   
      <h1 v-html="$page.post.title" class="mb-4"/>
      <div class="meta">
        <div class="box author">
          <span class="label">Author</span>
          <span class="author-name" v-text="$page.post.author"/>
        </div>
        <div class="box date">
          <span class="label">Date</span>
          <div v-text="new Date($page.post.date).toLocaleDateString()"/>
        </div>
        <div class="box time">
          <span class="label">Time</span>
          <span>{{ $page.post.timeToRead }} min read</span>
        </div>
      </div>
      <BlogContent class="mt-5" :content="$page.post.content"/>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    author
    date
    timeToRead
    content
    image
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent'

export default {
  components: {
    BlogContent,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.blogPost {
// background-color: olivedrab;
  padding: 1rem 2rem 1rem 2rem;
}

.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  padding: 1rem;
  max-width: 480px;
}
</style>
