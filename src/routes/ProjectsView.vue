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
                    name: "This Portfolio",
                    description: `My new portfolio written using Vue.js 3 and SASS.
                    I have tried to learn more things and make it more responsive than the previous one.`,
                    image: require("@/_assets/img/projects/portfolio.png"),
                    technologies: ["Vue.js 3", "JavaScript", "SASS"],
                    links: [
                        {
                            name: "Website",
                            href: "https://fizi.pw"
                        },
                        {
                            name: "GitHub",
                            href: "https://github.com/fizioterapia/new-portfolio"
                        }
                    ]
                },
                {
                    name: "cheetahden.tech",
                    description: `My personal project, gameservers for game called Open Fortress.
                    I'm developer of the website and plugins for server using SourcePawn.
                    Servers are being host on my dedicated machine with many bash helper scripts.`,
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
                    name: "Yet Another Boring Todo List (YABTL)",
                    description: `Yet Another Boring Todo List.
                    One of projects I made to learn how to use Vue.js.
                    You can change priority, add more items and remove them.`,
                    image: require("@/_assets/img/projects/yabtl.png"),
                    technologies: ["Vue.js 3", "SASS"],
                    links: [
                        {
                            name: "GitHub",
                            href: "https://github.com/fizioterapia/YABTL"
                        },
                        {
                            name: "Preview",
                            href: "https://projects.fizi.pw/yabtl/"
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