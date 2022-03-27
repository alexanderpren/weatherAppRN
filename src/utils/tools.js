import * as Yup from 'yup';

export const DisplayingErrorMessagesSchema = Yup.object().shape({
  city: Yup.string()
    .required('Required, please enter a city name')
    .min(3, 'Must be at least 3 characters long')
    .matches(/^[aA-zZ\s]+$/, 'Only letters are allowed for this field ')
    .max(30, 'Must be 30 characters or less'),
});

export const validate = values => {
  const errors = {};
  if (!values.city) {
    errors.city = 'Required';
  } else if (!/^[a-zA-Z]*$/g.test(values.city)) {
    errors.city = 'Only letters allowed';
  }
  return errors;
};

export const getErrorMessage = e => {
  let errorString = 'Errors:';
  let data = [];

  if (!e.response) {
    throw e;
  }

  Object.keys(e.response.data).map(field => {
    if (Array.isArray(e.response.data[field])) {
      e.response.data[field].map(message => {
        data.push({field: field, message: message});
      });
    } else {
      data.push({field: field, message: e.response.data[field]});
    }
  });

  return {
    message: {
      status: e.response.status,
      message: errorString,
      data: data,
    },
  };
};

export const Round = value => {
  return Math.round(parseInt(value) * 100) / 100;
};
