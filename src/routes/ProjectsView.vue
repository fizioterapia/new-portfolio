<template>
    <div class="projects">
        <div class="project" v-for="(project, index) in projects" :key="index">
            <div class="split">
                <div class="column c-30">
                    <ProjectImage :src="project.image" />
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
        ProjectImage
    },
    data() {
        return {
            projects: [
                {
                    name: "testowy",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris justo purus, tincidunt ut magna in, aliquam euismod lorem.
                    Phasellus dui sem, auctor non fringilla id, auctor vitae ante.
                    Suspendisse fermentum, sem eget facilisis aliquet, eros tortor feugiat libero, eget tempus erat ante a tortor.
                    Pellentesque lacinia, tellus a sagittis posuere.`,
                    image: require("@/_assets/img/project.png"),
                    technologies: ["vue.js 3", "js"],
                    links: [
                        {
                            name: "github",
                            href: "http://github.com"
                        }
                    ]
                },
                {
                    name: "testowy 2",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris justo purus, tincidunt ut magna in, aliquam euismod lorem.
                    Phasellus dui sem, auctor non fringilla id, auctor vitae ante.
                    Suspendisse fermentum, sem eget facilisis aliquet, eros tortor feugiat libero, eget tempus erat ante a tortor.
                    Pellentesque lacinia, tellus a sagittis posuere.`,
                    image: require("@/_assets/vue.png"),
                    technologies: ["vue.js 3", "js"],
                    links: [
                        {
                            name: "vue website",
                            href: "http://vuejs.org"
                        }
                    ]
                }
            ]
        }
    }
}
</script>