<template>
  <div>
    <BlogBottom :bblogs="$static.bblogs.edges"/>
    <footer class="page-footer">
      <span>© {{ new Date().getFullYear() | formatThYear }}&nbsp;</span>
      <span>by <a href="//boomikatech.com"> BoomikaTech </a></span>
    </footer>
  </div>
</template>

<static-query>
query Posts {
	bblogs: allBlogBottom(sortBy: "displayorder" order: ASC) {
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
</static-query>

<script>
import { DateTime } from 'luxon'
import BlogBottom from '@/components/BlogBottom'

export default {
  components: {
    BlogBottom
  },
  filters: {
    formatThYear: function (value) {
      if (!value)
        return ''
      var dt = DateTime.fromISO(value, { zone: 'utc' })
      return dt.setLocale('th').toLocaleString({ year: 'numeric' })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 1em;
  > span {
    margin: 1rem .35em;
  }
  a {
    color: currentColor;
    text-decoration: underline;
  }
  color: white;
  background-color: #1693BE;
}
</style>
