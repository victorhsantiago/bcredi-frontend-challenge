<template>
  <div
    class="notification"
    :class="showNotification && 'notification--open'"
  >
    <p class="notification__text">
      Parabéns! Cadastro realizado com sucesso!
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseNotification',
  props: {
    showNotification: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  width: 100%;
  height: 64px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $greenish-teal;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s ease-in, visibility 0.1s ease-in;

  &--open{
    visibility: visible;
    opacity: 1;
  }

  @media screen and (min-width: 600px) {
      width: 60%;
  }

  &__text {
    color: white;
  }
}
</style>
