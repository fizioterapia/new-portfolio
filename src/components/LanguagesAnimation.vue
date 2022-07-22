<template>
    <canvas id="vue-c-languagesanimation"></canvas>
</template>

<style scoped>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
</style>

<script>
    export default {
        data() {
            return {
                canvas: null,
                ctx: null,
                interval: null,
                fps: 60,
                logos: [
                    '\uf41f',
                    '\uf3d3',
                    '\uf41e',
                    '\uf13b',
                    '\uf38b',
                    '\uf17c',
                    '\uf233',
                    '\uf1d3',
                ],
            }
        },
        methods: {
            resize() {
                this.canvas.width = this.canvas.parentElement.clientWidth;
                this.canvas.height = this.canvas.parentElement.clientHeight;
            },
            draw() {
                const spacing = this.canvas.width > this.canvas.height ? this.canvas.height : this.canvas.width;

                const time = Date.now() / 1000;
                this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                this.ctx.fillStyle = 'green';

                for(const i in this.logos) {
                    this.ctx.font = `${spacing / 10}px "FontAwesome"`;
                    this.ctx.fillStyle = "white";

                    this.ctx.fillText(this.logos[i], 
                        (this.canvas.width / 2) + Math.sin(time + ((i + 1) * (360 / this.logos.length))) * (spacing / 3),
                        (this.canvas.height / 2) + Math.cos(time + ((i + 1) * (360 / this.logos.length))) * (spacing / 3),
                    )
                }
            }
        },
        mounted() {
            window.addEventListener("resize", this.resize);

            this.canvas = document.getElementById("vue-c-languagesanimation");
            this.ctx = this.canvas.getContext('2d');
        
            if(this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => { this.draw() }, 1000/this.fps);
        },
        unmounted() {
            window.removeEventListener("resize", this.resize);
        }
    }
</script>