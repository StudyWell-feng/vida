<template>
  <swiper 
    :slidesPerView="screenWidth > 1200 ? 4 : (screenWidth > 960 ? 3 : (screenWidth > 768 ? 2 : 1))"
    :spaceBetween="screenWidth < 768 ? 30 : 26"
    :loop="true"
    :pagination="false"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    style="padding: 20px;"
  >
    <swiper-slide v-for="(item, index) in gameInfo" :key="index" class="swiper-box ">
      <div class="box" >
        <div class="image">
          <img
            :src="item.banner"
            :alt="item.bannerAlt"
          />
        </div>
        <div class="content">
          <div class="text-content-game">
            <h5>{{ item.title }}</h5>
            <div class="app-logo">
              <img
                :src="item.icon"
                :alt="item.iconAlt"
              />
            </div>
          </div>
          <div class="text-content-game-desc">
            {{ item.desc }}
          </div>
          <div class="play-now">
            <a
              class="store-botton"
              :href="os == 'iOS' ? item.appStoreLink : item.googlePlayLink"
              :title="item.title+' download link'"
            >
              <span>Play now</span>
              <i class="arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
  
<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { gameInfo } from '../utils/json'
const modules = [Pagination, Autoplay]
import { ref, onMounted } from 'vue';

const os = ref('iOS');
const screenWidth = ref(0);

function getOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // 检测 iOS
  if (/iPad|iPhone|iPod|Mac OS/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  return "others";
}

onMounted(() => {
  os.value = getOS();
  screenWidth.value = window.innerWidth;
  window.addEventListener('resize', updateWidth);
});

function updateWidth() {
  screenWidth.value = window.innerWidth;
}
</script>
  
<style scoped lang="less">
.swiper-box{
  width: 100%;
}
</style>