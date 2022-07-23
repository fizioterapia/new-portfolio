<template>
    <div class="projects">
        <div class="project" v-for="(project, index) in projects" :key="index">
            <div class="split">
                <div class="column c-30">
                    <c-project-image :src="project.image" />
                </div>
                <div class="column c-70">
                    <h1>{{ project.name }}</h1>
                    <div class="technologies">
                        <div class="badge" v-for="(technology, index) in project.technologies" :key="index">
                            {{ technology }}
                        </div>
                    </div>
                    <p>{{ project.description }}</p>
                    <div class="links">
                        <a class="link" v-for="(link, index) in project.links" :key="index" :href="link.href">
                            {{ link.name }} 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectImage from '@/components/ProjectImage.vue';

export default {
    name: 'ProjectsView',
    components: {
        "c-project-image": ProjectImage
    },
    data() {
        return {
            projects: [
                {
                    name: "cheetahden.tech",
                    description: `Game servers for game called Open Fortress.
                    I'm creator and developer of those servers.`,
                    image: require("@/_assets/img/projects/cheetah.png"),
                    technologies: ["Nuxt.js", "SASS", "SourcePawn", "PHP", "MySQL", "Linux (Debian)"],
                    links: [
                        {
                            name: "Website",
                            href: "https://cheetahden.tech"
                        }
                    ]
                },
                {
                    name: "IT Shop",
                    description: `Simple shop created to learn more of Vue 3 and learn how to properly use Express.js
                    There is authentication, adding items to cart, browsing items and more.`,
                    image: require("@/_assets/img/projects/shop.png"),
                    technologies: ["Vue.js 3", "Vuex", "Node.js", "Express.js", "JWT", "MySQL", "SASS"],
                    links: [
                        {
                            name: "GitHub",
                            href: "https://github.com/fizioterapia/it-shop"
                        }
                    ]
                },
                {
                    name: "Yet Another Boring Todo List (YABTL)",
                    description: `Game server for game called Garry's Mod.
                    I'm creator and developer of this server.`,
                    image: require("@/_assets/img/projects/yabtl.png"),
                    technologies: ["Vue.js 3", "SASS"],
                    links: [
                        {
                            name: "GitHub",
                            href: "https://github.com/fizioterapia/YABTL"
                        },
                        {
                            name: "Preview",
                            href: "https://fizi.pw/yabtl/"
                        }
                    ]
                },
                {
                    name: "Contest Application",
                    description: `Winning application for Vue.js 3 & Node.js contest on my university.
                    Contest was organized by company called Focus Telecom Poland.
                    Application isn't working properly, since every contestant lost access to Dialer library and you can only use it to display "slideshow".`,
                    image: require("@/_assets/img/projects/course.png"),
                    technologies: ["Vue.js 3", "Vuex", "Node.js", "Express.js", "socket.io", "SASS"],
                    links: [
                        {
                            name: "GitHub",
                            href: "https://github.com/fizioterapia/Konkurs-Focus-Telecom"
                        }
                    ]
                },
            ]
        }
    }
}
</script>