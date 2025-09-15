<template>
  <div class="deletion">
    <div class="content">
      <header class="text-center">
        <img class="game-logo" src="/deletion/logo1024.png" alt="logo" />
      </header>
      
      <div class="header">
        <h1>Instructions for Deleting Match Mall Data</h1>
        <h2>Detailed Steps and Precautions</h2>
      </div>
      
      <ol class="deletion-step">
        <li><p>Open Match Mall.</p></li>
        <li>
          <p>In the top right corner of the game interface, find and click the "Settings" button to open the settings menu.</p>
          <img class="deletion-instructions-image" src="/deletion/1.jpg" alt="click settings" />
        </li>
        <li>
          <p>Click the "Delete My Account" button.</p>
          <img class="deletion-instructions-image" src="/deletion/2.jpg" alt="click about delete my account button" />
        </li>
        <li>
          <p>Click the "Delete" button to confirm that you want to delete the game data. Enter the code "DELETE" and then click the "Delete" button again.</p>
          <div class="img-box">
            <img class="deletion-instructions-image" src="/deletion/3.jpg" alt="click delete button" />
            <img class="deletion-instructions-image" src="/deletion/4.jpg" alt="fill in DELETE" />
            <img class="deletion-instructions-image" src="/deletion/5.jpg" alt="click delete button" />
          </div>
        </li>
        <li><p>Once the game data is deleted, the game will automatically close.</p></li>
      </ol>

      <footer class="text-right">
        <a class="footer-link" href="/help/matchmall/deletion" target="_blank">Appendix: Data Deletion Instruction Table</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Deletion Instructions - Match Mall',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Match Mall!' },
    { name: 'keywords', content: 'IVYMOBILE,ivymobile,IvyMobile,Match Mall,游戏,match' }
  ],
  link: [{ rel: 'icon', href: '/deletion/icon.ico' }]
});
</script>

<style scoped>
.deletion{
  width: 100%;
  background-color: #3b4453 ;
  color: #fff ;
  padding: 30px;
}
.game-logo {
  width: 200px;
}
.content {
  max-width: 765px;
  margin: 0 auto;
}
.header {
  text-align: center;
}
.deletion-step {
  padding-right: 20px;
}
.deletion-instructions-image {
  max-width: 765px;
  width: 100%;
}
.img-box img {
  display: inline-block;
  padding: 10px;
  box-sizing: border-box;
}
.text-right {
  text-align: center;
}
.footer-link {
  color: #fff;
}
</style>
