<template>
  <Layout>
    <div class="blogs">
      <b-card-group columns>
        <div v-for="edges in $page.posts.edges" :key="edges.node.id">
          <div v-if="edges.node.image !== null">
            <b-card
              :title="edges.node.title"
              :img-src="$URL+edges.node.image.src"
              img-alt="Image"
              img-top
            >
              <b-card-text>{{edges.node.excerpt}}</b-card-text>
              <g-link style="color:black;" :to="edges.node.path">read more...</g-link>
            </b-card>
          </div>
          <div v-else>
            <b-card :title="edges.node.title" img-src img-alt="Image" img-top>
              <b-card-text>{{edges.node.excerpt}}</b-card-text>
              <g-link style="color:black;" :to="edges.node.path">read more...</g-link>
            </b-card>
          </div>
        </div>
      </b-card-group>
    </div>
  </Layout>
</template>

<page-query>
query Blog {
	posts:allBlogPost(filter: { footer: { eq: false } }) {
    edges {
      node {
        id
        path
        title
        excerpt
        image           
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.blogs {
  // background-color: olivedrab;
  padding: 0 2rem 0 2rem;
  max-width: 950px;
}


.media-body {
  margin: auto;
}

.card {
  color: white;
  background-color: #ED7F61;
}

.card .card-img-top {
  padding: 1rem;
}

.card-deck .card {
  // width: 250px;
  max-width: calc(80% - 5px);
}

.card .card-img-top {
  max-width: 300px;
  max-height: 300px;
  // border-radius: 1rem;
}
</style>

