import { mount, createLocalVue } from '@vue/test-utils';
import VueTheMask from 'vue-the-mask';
import SignupForm from '@/components/SignupForm.vue';

const localVue = createLocalVue();
localVue.use(VueTheMask);

describe('SignupForm.vue', () => {
  const factory = () => mount(SignupForm, { localVue });

  it('has data', () => {
    expect(typeof SignupForm.data).toBe('function');
  });

  it('validates empty email', () => {
    const wrapper = factory();
    const emailInput = wrapper.find('#email-input');

    expect(wrapper.vm.emailError).toBe('');

    emailInput.trigger('blur');

    expect(wrapper.vm.emailError).toBe('Preencha o e-mail');
  });

  it('validates invalid email', () => {
    const wrapper = factory();
    const emailInput = wrapper.find('#email-input');

    expect(wrapper.vm.emailError).toBe('');

    emailInput.setValue('invalid@email');
    emailInput.trigger('blur');

    expect(wrapper.vm.emailError).toBe('E-mail inválido');
  });

  it('validates valid email', () => {
    const wrapper = factory();
    const emailInput = wrapper.find('#email-input');

    expect(wrapper.vm.emailError).toBe('');

    emailInput.setValue('valid@email.com');
    emailInput.trigger('blur');

    expect(wrapper.vm.emailError).toBe('');
  });

  it('validates empty cpf', () => {
    const wrapper = factory();
    const cpfInput = wrapper.find('#cpf-input');

    expect(wrapper.vm.cpfError).toBe('');

    cpfInput.trigger('blur');

    expect(wrapper.vm.cpfError).toBe('Preencha o CPF');
  });

  it('validates invalid cpf', () => {
    const wrapper = factory();
    const cpfInput = wrapper.find('#cpf-input');

    expect(wrapper.vm.cpfError).toBe('');

    cpfInput.setValue('111.111.111-11');
    cpfInput.trigger('blur');

    expect(wrapper.vm.cpfError).toBe('CPF inválido');
  });

  it('validates valid cpf', () => {
    const wrapper = factory();
    const cpfInput = wrapper.find('#cpf-input');

    expect(wrapper.vm.cpfError).toBe('');

    cpfInput.setValue('225.840.132-15');
    cpfInput.trigger('blur');

    expect(wrapper.vm.cpfError).toBe('');
  });

  it('validates empty birthdate', () => {
    const wrapper = factory();
    const birthdateInput = wrapper.find('#birthdate-input');

    expect(wrapper.vm.birthdateError).toBe('');

    birthdateInput.trigger('blur');

    expect(wrapper.vm.birthdateError).toBe('Preencha a data de nascimento');
  });

  it('validates invalid birthdate', () => {
    const wrapper = factory();
    const birthdateInput = wrapper.find('#birthdate-input');

    expect(wrapper.vm.birthdateError).toBe('');

    birthdateInput.setValue('31/02/1990');
    birthdateInput.trigger('blur');

    expect(wrapper.vm.birthdateError).toBe('Data inválida');
  });

  it('validates valid birthdate', () => {
    const wrapper = factory();
    const birthdateInput = wrapper.find('#birthdate-input');

    expect(wrapper.vm.birthdateError).toBe('');

    birthdateInput.setValue('17/04/1989');
    birthdateInput.trigger('blur');

    expect(wrapper.vm.birthdateError).toBe('');
  });

  it('validates empty password', () => {
    const wrapper = factory();
    const passwordInput = wrapper.find('#password-input');

    expect(wrapper.vm.passwordError).toBe('');

    passwordInput.trigger('blur');

    expect(wrapper.vm.passwordError).toBe('Preencha uma senha');
  });

  it('validates invalid password', () => {
    const wrapper = factory();
    const passwordInput = wrapper.find('#password-input');

    expect(wrapper.vm.passwordError).toBe('');

    passwordInput.setValue('1234');
    passwordInput.trigger('blur');

    expect(wrapper.vm.passwordError).toBe('Senha inválida, mínimo de 8 caracteres');
  });

  it('validates valid password', () => {
    const wrapper = factory();
    const passwordInput = wrapper.find('#password-input');

    expect(wrapper.vm.passwordError).toBe('');

    passwordInput.setValue('87654321');
    passwordInput.trigger('blur');

    expect(wrapper.vm.passwordError).toBe('');
  });

  it('validates unchecked acceptTerms', () => {
    const wrapper = factory();
    const acceptTermsCheckbox = wrapper.find('#accept-terms-checkbox');

    expect(wrapper.vm.acceptTermsError).toBe('');

    acceptTermsCheckbox.trigger('change');

    expect(wrapper.vm.acceptTermsError).toBe('Aceite nossas políticas para continuar');
  });

  it('validates checked acceptTerms', () => {
    const wrapper = factory();
    const acceptTermsCheckbox = wrapper.find('#accept-terms-checkbox');

    expect(wrapper.vm.acceptTermsError).toBe('');

    acceptTermsCheckbox.setChecked();
    acceptTermsCheckbox.trigger('change');

    expect(wrapper.vm.acceptTermsError).toBe('');
  });

  it('validates the form', async () => {
    const wrapper = factory();

    const email = 'email@domain.com';
    const cpf = '915.078.706-39';
    const birthdate = '20/12/1988';
    const password = 'abcdefgh';

    wrapper.find('#email-input').setValue(email);
    wrapper.find('#cpf-input').setValue(cpf);
    wrapper.find('#birthdate-input').setValue(birthdate);
    wrapper.find('#password-input').setValue(password);
    wrapper.find('#accept-terms-checkbox').setChecked();

    expect(wrapper.vm.validateForm()).toBe(true);
  });

  it('submits the form', async () => {
    const wrapper = factory();

    const email = 'email@domain.com';
    const cpf = '915.078.706-39';
    const birthdate = '20/12/1988';
    const password = 'abcdefgh';

    wrapper.find('#email-input').setValue(email);
    wrapper.find('#cpf-input').setValue(cpf);
    wrapper.find('#birthdate-input').setValue(birthdate);
    wrapper.find('#password-input').setValue(password);
    wrapper.find('#accept-terms-checkbox').setChecked();

    wrapper.find('.signup-form__submit').trigger('click');

    expect(wrapper.emitted().notification).toBeTruthy();
    expect(wrapper.vm.validateForm()).toBe(false);
  });
});
