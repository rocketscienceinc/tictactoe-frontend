<template>
  <div class="window" v-bind="$attrs">
    <p class="window__text">Code to join this room:</p>
    <p class="window__code-to-join">1739553</p>
    <p class="window__text">or use link:</p>
    <p class="window__link-to-join">https://tictactoe.kg/join/1739553</p>
    <!-- TODO: Написать script, который сохраняет ссылку и изминения стилей кнопки после нажатия (на какое-то время) -->
    <button class="window__copy-link" @click="changeText">{{ buttonText }}</button>
    <button class="window__make-qr">make qr</button>
  </div>
  <!-- <p>waiting for your opponent...</p> -->
</template>

<script>
import '@/styles/window.css'
export default {
  inheritAttrs: false, // Отключение автоматического наследования атрибутов
  data() {
    return {
      buttonText: 'copy link'
    }
  },
  methods: {
    changeText() {
      this.buttonText = 'link copied'
    }
  }
}
</script>

<style>
p {
  margin: 0;
}
.window__text {
  font-size: clamp(1.1rem, 2.3vw, 2.2rem);
  margin-bottom: 2%;
}

.window__code-to-join {
  font-size: clamp(1.1rem, 2.3vw, 2.2rem);
  color: var(--yellow);
  margin-bottom: 5%;
}
.window__link-to-join {
  font-size: clamp(1rem, 1.5vw, 1.7rem);
  color: var(--blue);
  margin-bottom: 4%;
}

.window__copy-link {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  transition: all 0.3s ease;
}

.window__copy-link:hover {
  color: rgba(50, 41, 47, 1);
  background-color: white;
}

.window__make-qr {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
}
</style>
