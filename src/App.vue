<template>
  <div class="bg"></div>
  <nav>
    <div class="inner">
      <div class="nav--name">
        fizi.pw
      </div>
      <div class="nav--links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </nav>
  <main>
    <router-view/>
  </main>
</template>

<script>

</script>

<style lang="scss" src="@/styles/index.scss"></style>