<template>
    <!-- TODO: add slideshow to preview -->

    <div class="project--image">
        <div class="modal" :class="{ active: active }">
            <div class="nav">
                <button @click="toggleModal(false)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></button>
            </div>
            <div class="content">
                <img :src="src" />
            </div>
        </div>
        <img class="preview" :src="src" @click="toggleModal" />
    </div>
</template>

<script>
export default {
    name: "ProjectImage",
    props: {
        src: String
    },
    data() {
        return {
            active: false,
        }
    },
    methods: {
        toggleModal(force) {
            this.active = (force ? force : !this.active);
        }
    }
}
</script>

