<template>
  <div class="window">
    <div class="window__changing-text">{{ changingText }}</div>
  </div>
</template>

<script>
import '@/styles/window.css'

export default {
  data() {
    return {
      texts: [
        'draw the playing field',
        'sharpening the crosses',
        'holey noughts',
        'coloring the signs',
        'we select the best opponent',
        'searching searching searching'
      ],
      changingText: 'waiting for the opponent',
      currentIndex: 0
    }
  },

  mounted() {
    this.changeText()
  },

  methods: {
    changeText() {
      setInterval(() => {
        this.changingText = this.texts[this.currentIndex]
        this.currentIndex = (this.currentIndex + 1) % this.texts.length
      }, 4000)
    }
  }
}
</script>

<style>
.window__changing-text {
  font-size: clamp(1.1rem, 2.3vw, 2.2rem);
  color: white;
}
</style>
