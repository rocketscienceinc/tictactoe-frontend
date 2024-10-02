<template>
  <div v-if="isVisible" class="modal">
    <!-- -->
    <div class="modal-content">
      <p>We are waiting for the second player.</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitingWindow',
  props: {
    // Видимостью м. окна через пропс
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close') // Фунеция для закрытия окна
    }
  }
}
</script>

<style scoped>
.modal {
  z-index: 1000; /* Отоброжение поверх*/
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.262);
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.modal-content {
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  margin-top: 60px;
  padding: 25px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 13px;
}
</style>
