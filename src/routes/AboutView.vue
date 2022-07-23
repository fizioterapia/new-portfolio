<template>
    <div class="about">
        <h1>Hi, I'm Tomasz.</h1>
        <div class="card">
            <p>I'm Software Developer currently studying at Faculty of Mathematics and Computer Science of University of Lodz.<br /><br />
In free time, I'm developing web applications, plugins for game servers and I'm also maintaining my dedicated server which is used to host this website.</p>
            <div class="buttons">
                <button @click="this.$router.push('/projects');">Check out my projects</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutView',
    }
</script>
