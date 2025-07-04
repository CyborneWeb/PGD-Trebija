/**
 * Creates an onChange handler for form inputs
 * @param {Object} formValues - Current form values state
 * @param {Function} setFormValues - State setter for form values
 * @returns {Function} - onChange event handler
 */
export const handleFormChange = (formValues, setFormValues) => (e) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: value,
  });
};

/**
 * Creates an onBlur handler for form validation
 * @param {Object} formValues - Current form values state
 * @param {Object} formErrors - Current form errors state
 * @param {Function} setFormErrors - State setter for form errors
 * @returns {Function} - onBlur event handler
 */
export const handleFormBlur =
  (formValues, formErrors, setFormErrors) => (e) => {
    const { name, value } = e.target;
    let errors = { ...formErrors };

    // Basic validation rules
    switch (name) {
      case "name":
        if (!value.trim()) {
          errors[name] = "Ime je obvezno";
        } else {
          delete errors[name];
        }
        break;
      case "email":
        if (!value.trim()) {
          errors[name] = "Email je obvezen";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors[name] = "Email ni veljaven";
        } else {
          delete errors[name];
        }
        break;
      case "subject":
        if (!value.trim()) {
          errors[name] = "Zadeva je obvezna";
        } else {
          delete errors[name];
        }
        break;
      case "message":
        if (!value.trim()) {
          errors[name] = "Sporočilo je obvezno";
        } else {
          delete errors[name];
        }
        break;
      default:
        // For other fields, just check if required and not empty
        if (e.target.required && !value.trim()) {
          errors[name] = "To polje je obvezno";
        } else {
          delete errors[name];
        }
    }

    setFormErrors(errors);
  };
