<template>
  <div class="preloader" :class="{hidden: hidePreloader}">
    loading...
  </div>
  <div class="chee" :class="{ visible: easterEgg }">

  </div>
  <div class="bg"></div>
  <nav>
    <div class="inner">
      <div class="nav--name">
        fizi.pw
      </div>
      <div class="nav--links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About me</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        hidePreloader: false,
        pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
        current: 0,
        easterEgg: false
      }
    },
    methods: {
      keyHandler(e) {
        if (this.pattern.indexOf(e.key) < 0 || e.key !== this.pattern[this.current]) {
          this.current = 0;
          return;
        }

        this.current++;

        if (this.pattern.length === this.current) {
          this.current = 0;
          this.easterEgg = true
        }
      },
      togglePreloader() {
        this.hidePreloader = true;
      }
    },
    mounted() {
      document.addEventListener('keydown', this.keyHandler, false);

      setTimeout(() => {
        this.togglePreloader();
      }, 1000);
    }
  }
</script>

<style lang="scss" src="@/_styles/index.scss"></style>