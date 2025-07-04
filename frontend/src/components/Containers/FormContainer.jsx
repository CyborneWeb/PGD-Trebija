import React, { useState, useRef, useEffect } from "react";
import FormInput from "../Inputs/FormInput";
import { FaUser, FaEnvelope, FaComment, FaHeading } from "react-icons/fa";
import {
  handleFormChange,
  handleFormBlur,
  handleFormSubmit,
} from "../../../utils/helper";
import { motion } from "framer-motion";

const FormContainer = ({
  initialValues = { name: "", email: "", subject: "", message: "" },
  onSubmitSuccess,
  title = "Pošljite nam sporočilo",
}) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const containerRef = useRef(null);

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
  const onSubmit = handleFormSubmit(
    formValues,
    formErrors,
    setFormErrors,
    setSubmitting,
    setFormStatus,
    (values) => {
      // Reset form after successful submission
      setFormValues(initialValues);
      if (onSubmitSuccess) onSubmitSuccess(values);
    }
  );

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

      {formStatus.message && (
        <motion.div
          variants={itemVariants}
          className={`mb-6 p-4 rounded-lg ${
            formStatus.type === "success"
              ? "bg-green-100 text-green-700 border border-green-400"
              : formStatus.type === "error"
              ? "bg-red-100 text-red-700 border border-red-400"
              : "bg-blue-100 text-blue-700 border border-blue-400"
          }`}
        >
          {formStatus.message}
        </motion.div>
      )}

      <form onSubmit={onSubmit}>
        <motion.div variants={itemVariants}>
          <FormInput
            type="text"
            label="Ime in priimek"
            name="name"
            placeholder="Vnesite vaše ime in priimek"
            value={formValues.name}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.name}
            required
            disabled={isSubmitting}
            icon={<FaUser className="text-gray-400" />}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            type="email"
            label="Email naslov"
            name="email"
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
            name="subject"
            placeholder="Zadeva sporočila"
            value={formValues.subject}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.subject}
            required
            disabled={isSubmitting}
            icon={<FaHeading className="text-gray-400" />}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FormInput
            type="textarea"
            label="Vaše sporočilo"
            name="message"
            placeholder="Vnesite vaše sporočilo tukaj..."
            value={formValues.message}
            onChange={onChange}
            onBlur={onBlur}
            error={formErrors.message}
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
