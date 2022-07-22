<template>
    <!-- TODO: add slideshow to preview -->

    <div class="project--image">
        <div class="modal" :class="{ active: active }">
            <div class="nav">
                <button @click="toggleModal(false)">Close</button>
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

