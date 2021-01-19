<template>
  <div class="signup-wrapper">
    <header class="signup-wrapper__header">
      <img class="signup-wrapper__header__logo" src="@/assets/svg/logo.svg" alt="" />
    </header>
    <SignupForm @notification="triggerShowNotification" />
    <BaseNotification :show-notification="showNotification"/>
  </div>
</template>

<script>
export default {
  name: 'SignupFormWrapper',
  components: {
    SignupForm: () => import('@/components/SignupForm.vue'),
    BaseNotification: () => import('@/components/BaseNotification.vue'),
  },
  data() {
    return {
      showNotification: false,
    };
  },
  methods: {
    toggleNotification() {
      this.showNotification = !this.showNotification;
    },
    triggerShowNotification() {
      this.toggleNotification();

      setTimeout(() => this.toggleNotification(), 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.signup-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;

  &__header {
    position: sticky;
    top: 0;
    height: 64px;
    width: 100%;
    flex-shrink: 0;
    background-color: white;
    box-shadow: inset 0 -1px 0 0 $white-two;
    z-index: 1;

    @media screen and (min-width: 600px) {
      position: relative;
      box-shadow: none;
    }

    &__logo {
      position: absolute;
      top: 20px;
      right: 32px;
    }
  }
}
</style>
