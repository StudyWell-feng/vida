<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s;
}
.page-enter-from,
.page-leave-to {
  transition: opacity 1s;
}
</style>
