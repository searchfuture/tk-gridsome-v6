<template>
  <header class="header">
    <b-navbar toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">
          <img class="logo-image" alt="logo" src="../assets/images/template/logo.png">
          {{ $static.metadata.siteName }}          
          </g-link>
        <g-link class="logo-home logo–mobile" to="/">
          <img class="logo-image" alt="logo" src="../assets/images/template/logo.png">
          {{ $static.metadata.siteName }} 
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle class="mr-2" target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="test ml-auto">
          <g-link class="nav--link" to="/about">About</g-link>
          <g-link class="nav--link" to="/blog">Blog</g-link>
          <g-link class="nav--link" to="/contact">Contact</g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;
  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
}

nav {
  width: 100%;
  padding-top: 1rem;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
  padding: 5px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
