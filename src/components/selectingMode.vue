<template>
  <div class="window">
    <p class="window_text">choose the difficulty</p>
    <button class="window__b-ease">ease pease</button>
    <button class="window__b-normal">normal</button>
    <button class="window__b-pain">feel pain</button>
  </div>
</template>

<script>
import '@/styles/window.css'
</script>

<style>
.window_text {
  font-size: clamp(1.2rem, 2.4vw, 2.5rem);
  margin-bottom: 6%;
}

.window__b-ease {
  font-size: clamp(1.2rem, 1.8vw, 1.9rem);
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--blue);
  margin-bottom: 1%;
}

.window__b-normal {
  font-size: clamp(1.2rem, 1.8vw, 1.9rem);
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--yellow);
  margin-bottom: 1%;
}

.window__b-pain {
  font-size: clamp(1.2rem, 1.8vw, 1.9rem);
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--red);
  margin-bottom: 1%;
}
</style>
