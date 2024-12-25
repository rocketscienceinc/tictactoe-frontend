<template>
  <div class="window">
    <!-- + state "it's a draw"(color: yellow), "you win!"(color: winner color), "you lose"(color: winner color) -->
    <div class="window__status-header" :class="statusColor">{{ statusHeader }}</div>
    <!-- <button class="window__buttons window__buttons__take-revenge">take revenge</button> -->
    <!-- <button class="window__buttons" @click="$emit('play_with_ai')">play with ai</button>
    <button class="window__buttons" @click="$emit('public_game')">public game</button> -->
    <button class="window__buttons" @click="$emit('privat_game')">privat game</button>
    <div class="window__join-box">
      <input
        class="window__join-box__input"
        v-model="formData.roomCode"
        name="roomCode"
        type="text"
        placeholder="   your room code"
      />
      <button class="window__join-box__button" @click="$emit('join_game')">join</button>
    </div>
  </div>
</template>

<script setup>
import '@/styles/window.css'
import appState from '@/state'
import { watch, ref, computed } from 'vue'
import { onMounted } from 'vue'

const props = defineProps({ modelValue: Object })

const formData = ref({ ...props.modelValue })

const emit = defineEmits(['update:modelValue', 'privat_game', 'join_game'])

watch(formData, (newData) => emit('update:modelValue', newData), { deep: true })

//----------

const statusHeader = ref('CHOOSE GAME TYPE')

if (appState.playerMark) {
  if (appState.playerMark === appState.winner) {
    statusHeader.value = 'YOU WIN!'
  } else if (appState.winner === '-') {
    statusHeader.value = "IT'S A DRAW"
  } else if (appState.playerMark !== appState.winner) {
    statusHeader.value = 'YOU LOSE'
  }
}

const statusColor = computed(() => {
  if (appState.winner === '-') {
    return 'status-header_for-draw'
  }
  const mark = appState.playerMark || ''
  if (mark.toUpperCase() === 'X') {
    return 'status-header_for-x'
  } else if (mark.toUpperCase() === 'O') {
    return 'status-header_for-o'
  }
  return ''
})

onMounted(() => {
  const url_params = window.location.search
  let code = null
  if (url_params.includes('code')) {
    code = url_params.split('=')[1]
  }

  if (code !== null) {
    formData.value.roomCode = code
  }
})
</script>

<style>
.window {
  display: grid;
  grid-gap: 3%;
  align-content: center;
  justify-content: center;
  justify-items: center;
}
.window__status-header {
  font-size: clamp(1.5rem, 2.7vw, 2.6rem);
  color: var(--yellow);
  margin-bottom: 5px;
}

.status-header_for-x {
  color: var(--red);
}

.status-header_for-o {
  color: var(--blue);
}

.status-header_for-draw {
  color: var(--yellow);
}

.window__buttons {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 2px 4px;
  font-size: clamp(1.1rem, 1.9vw, 1.7rem);
}

.window__buttons:hover {
  border: 1px solid white;
}

/* .window__buttons__take-revenge {
  display: none;
} */

.window__join-box {
  display: flex;
  margin-top: 3px;
}

.window__join-box__input {
  border-radius: 0%;
  border: 1px solid white;
  background-color: rgba(217, 217, 217, 0);
  font-family: 'HomeVideoFont', sans-serif;
  color: white;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  padding: 0;
  padding-left: 10px;
  min-width: 0;
}

.window__join-box__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.window__join-box__button {
  padding: 6px 10px;
  font-size: clamp(0.9rem, 1.7vw, 1.5rem);
  color: rgba(50, 41, 47, 1);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid white;
}

@media (width <= 380px) {
  .window__status-header {
    font-size: 1.3rem;
  }

  .window__buttons {
    font-size: 0.9rem;
  }

  .window__join-box__input {
    font-size: 0.6rem;
  }

  .window__join-box__button {
    font-size: 0.6rem;
    padding: 4px 5px;
  }
}
</style>
