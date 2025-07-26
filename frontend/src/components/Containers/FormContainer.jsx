import React, { useState, useRef, useEffect } from "react";
import FormInput from "../Inputs/FormInput";
import { FaUser, FaEnvelope, FaComment, FaHeading } from "react-icons/fa";
import { handleFormChange, handleFormBlur } from "../../../utils/helper";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// EmailJS configuration constants
const SERVICE_ID = "service_yyoecrd";
const TEMPLATE_ID = "template_4s92u41";
const PUBLIC_KEY = "DVkILSWGzPajFPmqq";

const FormContainer = ({
  initialValues = { ime: "", email: "", zadeva: "", sporocilo: "" },
  onSubmitSuccess,
  title = "Kontaktni obrazec",
}) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    ime: "",
    email: "",
    zadeva: "",
    sporocilo: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const containerRef = useRef(null);
  const formRef = useRef(null);

  // Intersection Observer to detect when the form is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const onChange = handleFormChange(formValues, setFormValues);
  const onBlur = handleFormBlur(formValues, formErrors, setFormErrors);

  // New submit handler using EmailJS and toast notifications
  const onSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    let errors = {};
    if (!formValues.ime) errors.ime = "Ime je obvezno";
    if (!formValues.email) errors.email = "Email je obvezen";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      errors.email = "Email ni veljaven";
    if (!formValues.zadeva) errors.zadeva = "Zadeva je obvezna";
    if (!formValues.sporocilo) errors.sporocilo = "Sporočilo je obvezno";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Submit form
    setSubmitting(true);

    // Use toast.promise to handle the notification lifecycle
    toast
      .promise(
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY),
        {
          pending: "Pošiljanje sporočila...",
          success:
            "Sporočilo uspešno poslano! Odgovorili vam bomo v najkrajšem možnem času.",
          error:
            "Napaka pri pošiljanju sporočila. Prosimo, poskusite ponovno kasneje.",
        },
        {
          autoClose: 3000,
        }
      )
      .then(() => {
        // Reset form
        setFormValues(initialValues);
        if (onSubmitSuccess) onSubmitSuccess(formValues);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center"
      >
        {title}
      </motion.h2>

      <form ref={formRef} onSubmit={onSubmit}>
        <motion.div variants={itemVariants}>
          <FormInput
            type="text"
            label="Ime in priimek"
            name="ime" // Changed from "name" to match template
            placeholder="Vnesite vaše ime in priimek"
            value={formValues.ime}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.ime}
            required
            disabled={isSubmitting}
            icon={<FaUser className="text-gray-400" />}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            type="email"
            label="Email naslov"
            name="email" // This was already correct
            placeholder="vase.ime@primer.com"
            value={formValues.email}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.email}
            required
            disabled={isSubmitting}
            icon={<FaEnvelope className="text-gray-400" />}
            helpText="Vaš email naslov ne bo nikoli deljen z drugimi."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            type="text"
            label="Zadeva"
            name="zadeva" // Changed from "subject" to match template
            placeholder="Zadeva sporočila"
            value={formValues.zadeva}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.zadeva}
            required
            disabled={isSubmitting}
            icon={<FaHeading className="text-gray-400" />}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            type="textarea"
            label="Vaše sporočilo"
            name="sporocilo" // Changed from "message" to match template
            placeholder="Vnesite vaše sporočilo tukaj..."
            value={formValues.sporocilo}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.sporocilo}
            required
            disabled={isSubmitting}
            rows={5}
            icon={<FaComment className="text-gray-400" />}
          />
        </motion.div>

        <motion.div className="mt-6" variants={itemVariants}>
          <button
            type="submit"
            className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Pošiljanje..." : "Pošlji sporočilo"}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default FormContainer;
