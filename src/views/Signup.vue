<template>
  <div class="signup">
    <header class="signup__header">
      <img class="signup__header__logo" src="@/assets/svg/logo.svg" alt="" />
    </header>
    <main class="signup__body">
      <SignupForm />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Singup',
  components: {
    SignupForm: () => import('@/components/SignupForm.vue'),
  },
};
</script>

<style lang="scss" scoped>
.signup {
  &__header {
    position: relative;
    height: 64px;
    box-shadow: inset 0 -1px 0 0 $white-two;

    &__logo {
      position: absolute;
      top: 20px;
      right: 32px;
    }
  }

  &__body {
    padding: 84px 24px 0;
  }
}
</style>
