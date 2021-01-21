<template>
  <div id="app">
    <Signup />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Signup: () => import('@/views/Signup.vue'),
  },
};
</script>

<style lang="scss">
</style>
