<template>
  <body>
    <appHeader />
    <div class="error404-main">
      <div class="error404-box">
        <img src="/assets/error404.svg" width="260" height="260" class="error404-box__svg" />
        <p class="error404-box__h1">error</p>
        <p class="error404-box__text">the page you were looking for not found</p>
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
.error404-main {
  display: grid;
  align-items: center;
  grid-template-rows: 5fr 1fr;
}

.error404-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error404-box__h1 {
  margin: 0px;
  margin-top: 23px;
  margin-bottom: 27px;
  font-size: clamp(3rem, 3vw, 4rem);
}

.error404-box__text {
  text-align: center;
  font-size: clamp(1.1rem, 1.1vw, 2rem);
}

.button-box__about-us-button {
  color: rgba(255, 255, 255, 0.6);
  font-size: clamp(1.2rem, 2vw, 2.5rem);
  border: 1px solid transparent;
  background-color: transparent;
  margin: 2% 2%;
  padding: 7px 10px;
}

@media (max-width: 480px) {
  .error404-box__svg {
    width: 200px;
    height: 200px;
  }
}
</style>
