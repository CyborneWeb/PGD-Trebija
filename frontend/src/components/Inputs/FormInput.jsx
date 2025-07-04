import React, { useState } from "react";
import { motion } from "framer-motion";

const FormInput = ({
  // Basic input props
  type = "text",
  label,
  placeholder,
  name,
  id,
  value,
  onChange,
  onBlur,
  // Validation props
  required = false,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  // Visual customization
  className = "",
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
  // Error handling
  error,
  // Additional props
  disabled = false,
  readOnly = false,
  autoComplete = "off",
  helpText,
  icon,
  // For textarea
  rows = 4,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  // Generate unique ID if not provided
  const inputId =
    id || name || `input-${Math.random().toString(36).substring(2, 9)}`;

  // Determine if input is textarea
  const isTextArea = type === "textarea";

  // Handle focus state
  const handleFocus = () => setIsFocused(true);

  // Handle blur state and validation
  const handleBlur = (e) => {
    setIsFocused(false);
    setTouched(true);
    if (onBlur) onBlur(e);
  };

  // Determine if error should be shown
  const showError = error && touched;

  // Dynamic classes based on states
  const containerClasses = `relative mb-6 ${className}`;
  const labelClasses = `block text-sm font-medium mb-2 ${
    disabled
      ? "text-gray-400 dark:text-gray-500"
      : "text-gray-700 dark:text-gray-300"
  } ${labelClassName}`;
  const inputClasses = `block w-full px-4 py-3 rounded-lg border ${
    showError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : isFocused
      ? "border-red-600 focus:border-red-700 focus:ring-red-700"
      : "border-gray-300 dark:border-gray-600 focus:border-red-500 focus:ring-red-500"
  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition duration-200 
  ${
    disabled
      ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
      : ""
  }
  ${inputClassName}`;
  const errorClasses = `mt-1 text-sm text-red-600 dark:text-red-500 ${errorClassName}`;
  const helpTextClasses = "mt-1 text-sm text-gray-500 dark:text-gray-400";

  // Icon positioning class - for textarea, align to top instead of center
  const iconPositionClass = isTextArea
    ? "absolute top-3 left-0 pl-3 pointer-events-none"
    : "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none";

  // Animation variants
  const labelVariants = {
    focused: { y: 0, scale: 1, transition: { duration: 0.2 } },
    blurred: { y: 0, scale: 1, transition: { duration: 0.2 } },
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className={containerClasses}>
      {/* Label */}
      {label && (
        <motion.label
          htmlFor={inputId}
          className={labelClasses}
          variants={labelVariants}
          initial="blurred"
          animate={isFocused ? "focused" : "blurred"}
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </motion.label>
      )}

      {/* Input field wrapper */}
      <div className="relative">
        {/* Icon if provided */}
        {icon && <div className={iconPositionClass}>{icon}</div>}

        {/* Input element or textarea */}
        {isTextArea ? (
          <textarea
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${inputClasses} ${icon ? "pl-10" : ""} min-h-24`}
            rows={rows}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            autoComplete={autoComplete}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${inputId}-error` : undefined}
          />
        ) : (
          <input
            type={type}
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${inputClasses} ${icon ? "pl-10" : ""}`}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            pattern={pattern}
            min={min}
            max={max}
            maxLength={maxLength}
            minLength={minLength}
            autoComplete={autoComplete}
            aria-invalid={showError ? "true" : "false"}
            aria-describedby={showError ? `${inputId}-error` : undefined}
          />
        )}
      </div>

      {/* Error message */}
      <motion.div
        id={`${inputId}-error`}
        className={errorClasses}
        variants={errorVariants}
        initial="hidden"
        animate={showError ? "visible" : "hidden"}
      >
        {showError && error}
      </motion.div>

      {/* Help text */}
      {helpText && !showError && (
        <div className={helpTextClasses}>{helpText}</div>
      )}
    </div>
  );
};

export default FormInput;
