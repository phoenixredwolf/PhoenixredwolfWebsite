<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/portal">Employee Portal</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: navy;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: navy;
}

nav a.router-link-exact-active {
  color: red;
}

body {
  
}
</style>
