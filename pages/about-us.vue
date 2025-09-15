<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light fixed-top opaque">
      <div class="container nav-container">
        <a class="navbar-brand" href="/#top" title="to homepage">
    
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon-a"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#Games" title="link to games">Games</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about-us" title="link to aboutUs">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#Contact" title="link to contactUs">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="about-us">
    <div class="images">
      <img src="@/assets/image/about/pic1.webp" alt="">
      <img src="@/assets/image/about/pic2.webp" alt="">
      <img src="@/assets/image/about/pic3.webp" alt="">
    </div>
  </div>
  <div class="platform-intro">
    <h2 class="platform-title">About partypop.club</h2>
    <p class="platform-description">
      partypop.club, a casual gaming platform by <strong>PARTYPOP PTE. LTD.</strong>, is dedicated to delivering innovative and joyful entertainment experiences through accessible, user-friendly games for players worldwide.
    </p>
  </div>
</template>
<script setup lang="ts">
  definePageMeta({
    layout: 'default'
  })
</script>

<style scoped lang="less">
.about-us{
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
}
.images{
  display: flex;
  justify-content: space-between;
  gap: 20px;
  img{
    width: 30%;
  }
}

.platform-intro {
  width: 80%;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  color: #333;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  font-family: OpenSans-Bold;
  transition: all 0.3s ease;
}
.platform-intro:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}
.platform-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #000;
}
.platform-description {
  font-size: 26px;
  line-height: 2;
  color: #333;
}

@media screen and (max-width: 768px) {
  .images{
    display: block;
    img{
      width: 100%;
      margin-top: 20px;
    }
  }
  .platform-title{
    font-size: 24px;
  }
  .platform-description{
    font-size: 20px;
  }
}
</style>