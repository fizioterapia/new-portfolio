<template>
  <div class="home">
    <div class="content">
      <div class="split">
        <div class="column">
          <h1>Tomasz Gradek</h1>
          <TypeWriter :texts="texts" />

          <div class="buttons">
            <button @click="this.$router.push('/about');">Learn about me</button>
          </div>
        </div>
        <div class="column">
          <LanguagesAnimation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TypeWriter from '@/components/TypeWriter.vue';
  import LanguagesAnimation from '@/components/LanguagesAnimation.vue';

  export default {
    name: 'HomeView',
    data() {
      return {
        texts: ["software developer", "university student"]
      }
    },
    components: {
      TypeWriter,
      LanguagesAnimation
    }
  }
</script>
