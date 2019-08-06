import { validateConstants } from 'shared/constants';

const validate = value => {
  let errors = {};

  if (!Number.isInteger(value)) {
    errors.number = validateConstants.INTEGER;
  } else if (value < 1) {
    errors.number = validateConstants.TOO_SMALL;
  } else if (value > 1000) {
    errors.number = validateConstants.TOO_HIGH;
  }

  return errors;
};

export { validate };
