<template>
  <header class="container-fluid">
    <h1>Welcome to PhoenixRedwolf.com</h1>
    <h2>The intenet home of Barret Vogtman</h2>
    <h3>Feel free to look around</h3>
  </header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!-- Toggle Button [handles opening navigation on mobile screen -->
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
    <!-- Collect nav links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="https://github.com/phoenixredwolf">Github Repositories</a></li>
        <li class="nav-item"><a href="">Computer Graphics Projects</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>