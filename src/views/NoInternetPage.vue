<template>
  <body>
    <appHeader />
    <div class="dino-main">
      <div></div>
      <div class="no-internet-box">
        <p class="p">no internet connection</p>
        <div class="dinosaur-box">
          <img src="/assets/dinosaur.svg" width="90" height="90" class="dino" />
          <p class="text-next-to-dino">check your internet connection and reload the page</p>
        </div>
      </div>
      <div class="button-box">
        <button class="button-box__about-us-button" @click="$router.push('/about-us')">
          ABOUT US
        </button>
      </div>
    </div>
  </body>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
export default {
  components: {
    appHeader
  }
}
</script>

<style>
.dino-main {
  display: grid;
}

.no-internet-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.p {
  font-size: clamp(1.5rem, 3.4vw, 3rem);
  text-align: center;
  margin: 0px;
  margin-bottom: 1%;
}
.dinosaur-box {
  font-size: clamp(0.8rem, 1.2vw, 1.5rem);
  display: flex;
  align-items: center;
}

.text-next-to-dino {
  color: white;
  font-size: clamp(0.8rem, 1.6vw, 1.5rem);
  text-align: center;
  overflow-wrap: break-word;
}

.dino {
  margin-right: 2%;
}

.button-box {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.button-box__about-us-button {
  color: rgba(255, 255, 255, 0.6);
  font-size: clamp(1.2rem, 2vw, 2.5rem);
  border: 1px solid transparent;
  background-color: transparent;
  margin: 2% 2%;
  padding: 7px 10px;
}

@media (max-width: 768px) {
  .dino {
    height: 60px;
    width: 60px;
  }
}

@media (max-width: 480px) {
  .dinosaur-box {
    padding: 0px 5%;
  }

  .p {
    font-size: 1.2rem;
  }
}
</style>
