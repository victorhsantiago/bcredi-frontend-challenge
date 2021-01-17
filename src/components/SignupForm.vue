<template>
  <form class="signup-form" novalidate @submit.prevent>
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
        :class="emailError && 'signup-form__field__input--error'"
        type="email"
        placeholder="ana.maria@email.com"
        required
        v-model="email"
        @blur="validateEmail"
      />
      <span v-if="emailError" class="signup-form__field__error">{{
        emailError
      }}</span>
    </div>

    <div class="signup-form__field">
      <label class="signup-form__field__label" for="cpf-input">CPF</label>
      <input
        id="cpf-input"
        class="signup-form__field__input"
        :class="cpfError && 'signup-form__field__input--error'"
        placeholder="000.000.000-00"
        required
        v-model="cpf"
        v-mask="'###.###.###-##'"
        @blur="validateCPF"
      />
      <span v-if="cpfError" class="signup-form__field__error">{{
        cpfError
      }}</span>
    </div>

    <div class="signup-form__field">
      <label class="signup-form__field__label" for="birthdate-input"
        >Data de nascimento</label
      >
      <input
        id="birthdate-input"
        class="signup-form__field__input"
        :class="birthdateError && 'signup-form__field__input--error'"
        placeholder="DD/MM/AAAA"
        v-mask="'##/##/####'"
        required
        v-model="birthdate"
        @blur="validateBirthdate"
      />
      <span v-if="birthdateError" class="signup-form__field__error">{{
        birthdateError
      }}</span>
    </div>

    <div class="signup-form__field">
      <label class="signup-form__field__label" for="password-input"
        >Senha</label
      >
      <input
        id="password-input"
        :type="passwordVisible ? 'text' : 'password'"
        class="signup-form__field__input"
        :class="passwordError && 'signup-form__field__input--error'"
        placeholder="Cadastre uma senha"
        required
        v-model="password"
        @blur="validatePassword"
      />
      <img
        class="signup-form__field__icon"
        src="@/assets/svg/eye.svg"
        alt="Ícone de visibilidade"
        @click="togglePasswordVisibility"
      />
      <span v-if="passwordError" class="signup-form__field__error">{{
        passwordError
      }}</span>
    </div>

    <div
      class="signup-form__terms"
      :class="acceptTermsError && 'signup-form__terms--error'"
    >
      <input
        class="signup-form__terms__checkbox"
        type="checkbox"
        :checked="acceptTerms"
        @click="toggleAcceptTerms"
        @change="validateAcceptTerms"
      />
      <p class="signup-form__terms__disclaimer">
        Li e estou de acordo com a <span>Política de Privacidade</span> e a
        <span>Política de Uso de Informações</span>.
      </p>
      <span v-if="acceptTermsError" class="signup-form__terms__error">{{
        acceptTermsError
      }}</span>
    </div>

    <button class="signup-form__submit" @click="submitForm()">
      <img class="signup-form__submit__icon" src="@/assets/svg/lock.svg" />
      Cadastrar
    </button>

    <div class="signup-form__footer">
      <p class="signup-form__footer__text">
        Já fiz meu cadastro. <span>Entrar agora.</span>
      </p>
    </div>
  </form>
</template>

<script>
import { isValid as cpfValidator } from '@fnando/cpf';
import {
  emailValidator,
  dateValidator,
  passwordValidator,
  termsValidator,
} from '@/utils/validators';

export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      emailError: '',
      cpf: '',
      cpfError: '',
      birthdate: '',
      birthdateError: '',
      password: '',
      passwordError: '',
      acceptTerms: false,
      acceptTermsError: '',
      passwordVisible: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    toggleAcceptTerms() {
      this.acceptTerms = !this.acceptTerms;
    },
    validateField({
      field, fieldError, missingFieldMsg, invalidFieldMsg, validationFunction,
    }) {
      const validateField = validationFunction(this[field]);

      if (!this[field]) {
        this[fieldError] = missingFieldMsg;
        return false;
      }

      if (!validateField) {
        this[fieldError] = invalidFieldMsg;
        return false;
      }

      this[fieldError] = '';
      return true;
    },
    validateEmail() {
      return this.validateField({
        field: 'email',
        fieldError: 'emailError',
        missingFieldMsg: 'Preencha o e-mail',
        invalidFieldMsg: 'E-mail inválido',
        validationFunction: emailValidator,
      });
    },
    validateCPF() {
      return this.validateField({
        field: 'cpf',
        fieldError: 'cpfError',
        missingFieldMsg: 'Preencha o CPF',
        invalidFieldMsg: 'CPF inválido',
        validationFunction: cpfValidator,
      });
    },
    validateBirthdate() {
      return this.validateField({
        field: 'birthdate',
        fieldError: 'birthdateError',
        missingFieldMsg: 'Preencha a data de nascimento',
        invalidFieldMsg: 'Data inválida',
        validationFunction: dateValidator,
      });
    },
    validatePassword() {
      return this.validateField({
        field: 'password',
        fieldError: 'passwordError',
        missingFieldMsg: 'Preencha uma senha',
        invalidFieldMsg: 'Senha inválida, mínimo de 8 caracteres',
        validationFunction: passwordValidator,
      });
    },
    validateAcceptTerms() {
      return this.validateField({
        field: 'acceptTerms',
        fieldError: 'acceptTermsError',
        missingFieldMsg: 'Aceite nossas políticas para continuar',
        invalidFieldMsg: 'Aceite nossas políticas para continuar',
        validationFunction: termsValidator,
      });
    },
    validateForm() {
      const emailValidation = this.validateEmail();
      const CPFValidation = this.validateCPF();
      const birthdateValidation = this.validateBirthdate();
      const passwordValidation = this.validatePassword();
      const termsAccepted = this.validateAcceptTerms();

      return (
        emailValidation
        && CPFValidation
        && birthdateValidation
        && passwordValidation
        && termsAccepted
      );
    },
    submitForm() {
      if (!this.validateForm()) return;

      this.$emit('notification');
      this.resetForm();
    },
    resetForm() {
      this.email = '';
      this.emailError = '';
      this.cpf = '';
      this.cpfError = '';
      this.birthdate = '';
      this.birthdateError = '';
      this.password = '';
      this.passwordError = '';
      this.acceptTerms = false;
      this.passwordVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.signup-form {
  display: grid;
  gap: 36px;
  grid-auto-rows: minmax(min-content, max-content);
  max-width: 360px;
  padding: 36px 24px 0;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 36px 20px 0;

      & div:nth-child(1) {
        grid-column: 1/3;
      }

      & div:nth-child(2) {
        grid-column: 1/3;
      }

      & div:nth-child(3) {
        grid-column: 1/2;
      }

      & div:nth-child(4) {
        grid-column: 2/3;
      }

      & div:nth-child(5) {
        grid-column: 1/3;
      }

      & div:nth-child(6) {
        grid-column: 1/3;
      }

      & button:nth-child(7) {
        grid-column: 1/3;
      }

      & div:nth-child(8) {
        grid-column: 1/3;
      }
  }

  &__header {
    @media screen and (min-width: 600px) {
      text-align: center;
    }

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
    position: relative;

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
        letter-spacing: normal;
      }

      &[type='password'] {
        letter-spacing: 4px;
        padding-right: 40px;
      }

      &--error {
        border-color: $coral-pink;
      }
    }

    &__icon {
      position: absolute;
      bottom: 28px;
      right: 16px;
      transform: translateY(50%);
      height: 12px;
      cursor: pointer;
    }

    &__error {
      position: absolute;
      bottom: -24px;
      font-size: 14px;
      color: $coral-pink;
      white-space: nowrap;
    }
  }

  &__terms {
    display: grid;
    position: relative;
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

    &__error {
      position: absolute;
      bottom: -24px;
      font-size: 14px;
      color: $coral-pink;
    }

    &--error {
      border-color: $coral-pink;
    }
  }

  &__submit {
    width: 100%;
    height: 56px;
    position: relative;
    border-radius: 3px;
    font-weight: bold;
    color: white;
    background-color: $dodger-blue;
    border: none;
    margin-bottom: 44px;
    cursor: pointer;
    flex-shrink: 0;

    &__icon {
      position: absolute;
      top: 50%;
      left: 32px;
      transform: translateY(-50%);
      height: 12px;
    }
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
