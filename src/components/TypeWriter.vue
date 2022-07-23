<template>
    <div class="typewriter">
        <p>{{ text }}</p>
        <div class="typing-indicator"></div>
    </div>
</template>

<script>
    export default {
        name: 'TypeWriter',
        data() {
            return {
                text: "",
                id: 0,
                direction: 1,
                delay: false,
                interval: null
            }
        },
        props: {
            texts: Array
        },
        methods: {
            animate() {
                if(this.delay == true) {
                    return false;
                }

                if (this.text == this.texts[this.id]) {
                    this.direction = -this.direction;
                    
                    this.delay = true;
                    setTimeout(() => {
                        this.delay = false
                        this.text = this.text.slice(0, this.direction);
                    }, 1500);
                    return false;
                }

                if (this.direction > 0) {
                    this.text = this.text + this.texts[this.id][this.text.length];
                } else {
                    this.text = this.text.slice(0, this.direction);
                }

                if (this.text.length == 0 && this.direction < 0) {
                    this.id = this.id + 1;
                    if (this.id >= this.texts.length) {
                        this.id = 0;
                    }
                    this.direction = -this.direction;
                    this.text = this.texts[this.id][0];
                }
            }
        },
        mounted() {
            if(this.interval) {
                clearInterval(this.interval)
            }

            this.interval = setInterval(() => {
                this.animate()
            }, 150);
        }
    }
</script>