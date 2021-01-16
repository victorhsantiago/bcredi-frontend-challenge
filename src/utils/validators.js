import { isValid, parse } from 'date-fns';

export const emailValidator = (email) => /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/.test(
  email,
);

export const dateValidator = (date) => {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
  return isValid(parsedDate);
};

export const passwordValidator = (password) => password.length >= 8;
