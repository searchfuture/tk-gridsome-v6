<template>
  <Layout>
    <b-container>
      <slider :sliders="$page.sliders.edges" />
      <ProjectsGrid :projects="$page.projects.edges" />
      <LatestJournals :journals="$page.journals.edges" />
    </b-container>
  </Layout>
</template>

<page-query>
query Posts {
  metadata{
    URL
  }
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
        content
      }
    }
  },
  journals: allJournalPost (perPage: 4, sortBy: "displayorder" order: ASC) {
    edges {
      node {
        id
        title
        thumbnail (quality: 90)
        path
        displayorder
        bgcolor
        textcolor
        content
      }
    }
  },
    sliders: allSliderPost (sortBy: "displayorder" order: ASC) {
    edges {
      node {
        id
        title
        thumbnail (quality: 90)
        path
        displayorder
        bgcolor
        textcolor
        content
      }
    }
  }
}


</page-query>



<script>
import Slider from "../components/Slider";
import ProjectsGrid from "@/components/ProjectsGrid";
import LatestJournals from "@/components/LatestJournals";

export default {  
  beforeCreate() {
   
    console.log(process.env.GRIDSOME_API_URL);
    console.log(this.$appName);
  },
  metaInfo: {
    title: "Main Page"
  },
  components: {
    Slider,
    ProjectsGrid,
    LatestJournals
  }
};
</script>

<style lang="scss">
.container {
  background-color: transparent;
  margin: 0;
  padding: 0;
  nav {
    background-color: yellow;
    font-size: 1.2rem;
    .active--exact {
      padding: 0.5rem;
    }
  }
}
</style>
