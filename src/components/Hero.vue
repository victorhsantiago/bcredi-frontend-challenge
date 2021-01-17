<template>
  <div class="hero">
    <div class="hero__testimonial">
      <p class="hero__testimonial__phrase">
        "Obtive crédito para capital de giro.
        O processo foi bem sucedido e tudo que foi abordado, foi cumprido."
      </p>
      <p class="hero__testimonial__author">Camila Bragrança,</p>
      <p class="hero__testimonial__company">Sideral Tecnologia</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: none;
  position: relative;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0) 16%,
    rgba(0, 0, 0, 0) 42%,
    rgba(0, 0, 0, 0.5) 69%,
    rgba(0, 0, 0, 0.8) 96%
  ), url('../assets/images/woman@2x.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;

  @media screen and (min-width: 600px) {
    display: block;
  }

  &__testimonial {
    position: absolute;
    right: 40px;
    bottom: 40px;
    max-width: 370px;
    text-align: right;

    &__phrase {
      font-size: 20px;
      color: white;
      margin-bottom: 8px;
    }

    &__author {
      font-weight: bold;
      color: white;
    }

    &__company {
      color: white;
    }
  }
}

</style>
