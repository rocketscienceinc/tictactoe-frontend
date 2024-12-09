<template>
  <div class="window">
    <!-- TODO: Сделать плавную/интересную анимацию перехода текста -->
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
      changingText: 'waiting for the opponent' // Начальный текст
    }
  },
  mounted() {
    this.changeText()
  },
  methods: {
    changeText() {
      setInterval(() => {
        this.changingText = this.getRandomText() // Получаем случайный текст
      }, 6000) // 6000 миллисекунд = 6 секунд
    },
    getRandomText() {
      const randomIndex = Math.floor(Math.random() * this.texts.length) // Генерация случайного индекса
      return this.texts[randomIndex] // Возвращаем текст по случайному индексу
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
