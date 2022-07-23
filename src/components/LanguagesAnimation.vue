<template>
    <canvas id="vue-c-languagesanimation"></canvas>
</template>

<style scoped>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

    canvas {
        background: var(--primary);
    }
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

                const time = Date.now() / 2500;
                this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

                this.ctx.font = `${spacing / 10}px "FontAwesome"`;
                this.ctx.fillStyle = "white";
                

                for(const i in this.logos) {
                    const size = this.ctx.measureText(this.logos[i])
                    const txtw = size.width

                    this.ctx.fillStyle = "rgba(0,0,0,.125)";

                    this.ctx.fillText(this.logos[i], 
                        (this.canvas.width / 2) - (txtw / 2) + Math.sin(time + ((i + 1) * (360 / this.logos.length))) * (spacing / 3),
                        (this.canvas.height / 2) + (spacing / 20) + Math.cos(time + ((i + 1) * (360 / this.logos.length))) * (spacing / 3) + 4,
                    )

                    this.ctx.fillStyle = "white";

                    this.ctx.fillText(this.logos[i], 
                        (this.canvas.width / 2) - (txtw / 2) + Math.sin(time + ((i + 1) * (360 / this.logos.length))) * (spacing / 3),
                        (this.canvas.height / 2) + (spacing / 20) + Math.cos(time + ((i + 1) * (360 / this.logos.length))) * (spacing / 3),
                    )
                }
            }
        },
        mounted() {
            this.canvas = document.getElementById("vue-c-languagesanimation");
            this.ctx = this.canvas.getContext('2d');

            window.addEventListener("resize", this.resize);
            this.resize();
        
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