<template>
  <form class="signup-form">
    <div class="signup-form__header">
      <h1 class="signup-form__header__title">Criar meu cadastro</h1>
      <p class="signup-form__header__description">
        Para acompanhar sua contratação de crédito você utilizará seu e-mail e
        CPF.
      </p>
    </div>
    <div class="signup-form__field">
      <label class="signup-form__field__label" for="email-input">E-mail</label>
      <input
        id="email-input"
        class="signup-form__field__input"
        type="email"
        placeholder="ana.maria@email.com"
      />
    </div>
    <div class="signup-form__field">
      <label class="signup-form__field__label" for="cpf-input">CPF</label>
      <input
        id="cpf-input"
        class="signup-form__field__input"
        placeholder="000.000.000-00"
      />
    </div>
    <div class="signup-form__field">
      <label class="signup-form__field__label" for="birthdate-input"
        >Data de nascimento</label
      >
      <input
        id="birthdate-input"
        class="signup-form__field__input"
        placeholder="DD/MM/AAAA"
      />
    </div>
    <div class="signup-form__field">
      <label class="signup-form__field__label" for="password-input"
        >Senha</label
      >
      <input
        id="password-input"
        type="password"
        class="signup-form__field__input"
        placeholder="Cadastre uma senha"
      />
    </div>
    <div class="signup-form__terms">
      <input class="signup-form__terms__checkbox" type="checkbox" />
      <p class="signup-form__terms__disclaimer">
        Li e estou de acordo com a <span>Política de Privacidade</span> e a
        <span>Política de Uso de Informações</span>.
      </p>
    </div>
    <button class="signup-form__submit">Cadastrar</button>
    <div class="signup-form__footer">
      <p class="signup-form__footer__text">
        Já fiz meu cadastro. <span>Entrar agora.</span>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SignupForm',
};
</script>

<style lang="scss" scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 36px;

  &__header {
    &__title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: $black;
    }

    &__description {
      color: $warm-grey;
    }
  }

  &__field {
    display: flex;
    flex-direction: column;

    &__label {
      font-size: 14px;
      line-height: 1.3;
      color: $warm-grey;
      margin-bottom: 10px;
    }

    &__input {
      width: 100%;
      height: 56px;
      padding: 18px 14px;
      border-radius: 3px;
      border: solid 1px $white-two;
      color: $black;

      &::placeholder {
        color: $pinkish-grey;
      }
    }
  }

  &__terms {
    display: grid;
    grid-template-columns: 56px auto;
    align-items: center;
    padding: 16px 0;
    border-radius: 3px;
    border: solid 1px $white-two;

    &__checkbox {
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 0;
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: solid 1px $white-two;
      justify-self: center;

      &:checked {
        background-color: $dodger-blue;

        &:after {
          display: block;
          content: '';
          background: no-repeat center url('../assets/svg/check.svg');
          height: 100%;
          width: 100%;
        }
      }
    }

    &__disclaimer {
      font-size: 14px;
      color: $pinkish-grey;

      & span {
        color: $dodger-blue;
      }
    }
  }

  &__submit {
    width: 100%;
    height: 56px;
    border-radius: 3px;
    font-weight: bold;
    color: white;
    background-color: $dodger-blue;
    border: none;
    margin-bottom: 44px;
  }

  &__footer {
    height: 64px;
    padding-top: 16px;
    border-top: 1px solid $white-two;
    display: flex;
    justify-content: center;

    &__text {
      font-size: 14px;
      color: $warm-grey;

      & span {
        color: $dodger-blue;
      }
    }
  }
}
</style>
