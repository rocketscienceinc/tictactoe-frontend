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
// TODO: Написать скрипт который будет высвечивать это страницу если пользователь ввёл неправильный url/пытается
// перейти на несуществующую страницу на сайте
// + сделать лого кнопкой, с помощью которой можно перейти на сраницу Welcome
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

@media (max-width: 480px) {
  .error404-box__svg {
    width: 200px;
    height: 200px;
  }
}
</style>
