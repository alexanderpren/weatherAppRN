export const validate = values => {
    const errors = {};
    if (!values.city) {
        errors.city = 'Required';
    }else if (!/^[a-zA-Z]*$/g.test(values.city)) {
        errors.city = 'Only letters allowed';
    }
    return errors;
}