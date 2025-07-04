import emailjs from "@emailjs/browser";

// EmailJS configuration constants
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

/**
 * Initializes EmailJS with your public key
 * Call this in your app initialization code (like App.js)
 */
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

/**
 * Sends an email using EmailJS
 * @param {Object} formData - Object containing form values (name, email, subject, message)
 * @returns {Promise} - Promise that resolves on successful email send
 */
export const sendContactEmail = async (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

/**
 * Alternative method to send form using a direct form reference
 * @param {Object} formRef - React ref to the form element
 */
export const sendFormEmail = async (formRef) => {
  if (!formRef.current) {
    throw new Error("Form reference is invalid");
  }

  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
};
