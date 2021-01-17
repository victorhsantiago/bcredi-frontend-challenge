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
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $greenish-teal;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s ease-in;

  &--open{
    visibility: visible;
    opacity: 1;
  }

  &__text {
    color: white;
  }
}
</style>
