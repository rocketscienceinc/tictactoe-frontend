<template>
  <header class="header">
    <div class="header__title">
      <div class="header__title__tic">TIC</div>
      <div class="header__title__tac">TAC</div>
      <div class="header__title__toe">TOE</div>
    </div>
    <div class="header__log-in-button">LOG IN</div>
  </header>
  <main>
    <div class="ellipse"></div>
    <div class="welcome-container">
      <p class="welcome-container__header">WELCOME</p>
      <button class="welcome-container__play-button">PLAY</button>
    </div>
    <div class="footer-container">
      <button class="footer-container__about-us-button">ABOUT US</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 20px;
  height: 9%;
  box-sizing: border-box;
  background-color: rgba(50, 41, 47, 0.37);
  backdrop-filter: blur(6px);

  .header__title__tic,
  .header__title__tac,
  .header__title__toe {
    display: inline;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  }

  .header__title__tac,
  .header__title__toe {
    margin-left: 10%;
  }

  .header__title__tic {
    color: rgba(255, 255, 255, 1);
    text-shadow:
      0 0 20px rgba(255, 255, 255, 0.8),
      -2px 2px 0 rgba(195, 187, 187, 1);
  }

  .header__title__tac {
    color: rgba(255, 74, 88, 1);
    text-shadow:
      0 0 20px rgba(255, 74, 88, 0.8),
      -2px 2px 0 rgba(204, 41, 54, 1);
  }

  .header__title__toe {
    color: rgba(20, 224, 209, 1);
    text-shadow:
      0 0 20px rgba(20, 224, 209, 0.8),
      -2px 2px 0 rgba(4, 154, 143, 1);
  }

  .header__log-in-button {
    color: white;
    font-size: clamp(1.5rem, 2vw, 3rem);
  }
}

main {
  height: 91%;
  display: grid;

  .ellipse {
    border-radius: 50%;
    position: absolute;
    width: 53.8vw;
    height: 53.25vh;
    left: calc(50% - 53.8vw / 2);
    top: calc(50% - 53.25vh / 2 + 4px);
    background: rgba(50, 41, 47, 0.6);
    opacity: 0.82;
    filter: blur(5px);
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
    .welcome-container__header {
      color: white;
      text-shadow:
        0 0 5px rgba(255, 255, 255, 0.5),
        0 0 30px rgba(255, 255, 255, 0.6),
        0 0 100px rgba(255, 255, 255, 0.4);
      font-size: clamp(3rem, 6.4vw, 4.5rem);
      margin: 0%;
      margin-bottom: 1%;
    }
    .welcome-container__play-button {
      color: white;
      font-size: clamp(2rem, 4.1vw, 3rem);
      border: 1px solid transparent;
      background-color: transparent;
      padding: 7px 10px;
    }

    .welcome-container__play-button:hover {
      border: 1px solid white;
    }
  }

  .footer-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .footer-container__about-us-button {
      color: white;
      font-size: clamp(1.5rem, 2vw, 3rem);
      border: 1px solid transparent;
      background-color: transparent;
      margin: 2% 2%;
      padding: 7px 10px;
    }
    .footer-container__about-us-button:hover {
      border: 1px solid white;
    }
  }
}
</style>
