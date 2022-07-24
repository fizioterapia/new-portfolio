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
      <div class="nav--button" @click="this.navVisible = !this.navVisible">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <Transition name="slide" mode="out-in">
        <div class="nav--links" v-if="navVisible || width > 595">
          <div class="nav--button" @click="this.navVisible = !this.navVisible">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </div>
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-house" />
            Home
          </router-link>
          <router-link to="/about">
            <font-awesome-icon icon="fa-solid fa-address-card" />
            About me
          </router-link>
          <router-link to="/projects">
            <font-awesome-icon icon="fa-solid fa-bars-progress" />
            Projects
          </router-link>
          <router-link to="/contact">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            Contact
          </router-link>
        </div>
      </Transition>
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
        easterEgg: false,
        navVisible: true,
        width: 0
      }
    },
    watch: {
      $route (to) {
        document.title = "fizi.pw - " + to.meta.title;
        this.navVisible = false;
      }
    },
    methods: {
      resize() {
        this.width = window.innerWidth
      },
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
      window.addEventListener("resize", this.resize);
      this.resize();

      document.addEventListener('keydown', this.keyHandler, false);

      setTimeout(() => {
        this.togglePreloader();
      }, 1000);
    }
  }
</script>

<style lang="scss" src="@/_styles/index.scss"></style>