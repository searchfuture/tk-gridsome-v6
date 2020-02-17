<template>
  <div id="app">
    <Header />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  }
};
</script>


<style lang="scss">
//  Add Noto Thai font
@font-face {
  font-family: NotoSansThai;
  src: url('../assets/fonts/NotoSansThai-Regular.ttf');
  font-style: normal;
  font-weight: normal;
}

* {
  box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: NotoSansThai,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  // background: url(../../static/images/linedpaper.png) repeat #fffdf0;
  background-color: #E9692E;
}

.main {
  margin: 0 auto;
  padding: 0;
}

// #content-wrapper {
//   flex: 1 0 auto;
//   max-width: 100%;
//   width: 95vw;
//   margin: 0 auto;
// }
// #content-wrapper {
//   background: url(../../static/images/wrapper.png) no-repeat;
//   background-size: 100% auto;
//   min-height: 1300px;
//   bottom: 0;
// }
</style>
