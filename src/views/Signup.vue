<template>
  <div class="signup">
    <Hero />
    <SignupFormWrapper />
  </div>
</template>

<script>
export default {
  name: 'Singup',
  components: {
    Hero: () => import('@/components/Hero.vue'),
    SignupFormWrapper: () => import('@/components/SignupFormWrapper.vue'),
  },
};
</script>

<style lang="scss" scoped>
.signup {
  height: 100vh;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 40% auto;
    justify-items: center;
  }
}
</style>
