import React from "react";
import PageHeader from "../components/Headers/PageHeader";
import ContactContainer from "../components/Containers/ContactContainer";
import FormContainer from "../components/Containers/FormContainer";

const Contact = () => {
  const handleFormSubmitSuccess = (formData) => {
    // Handle successful form submission, e.g., show a success message or redirect
    console.log("Form submitted successfully:", formData);
    // You could send this data to your backend here or show a success message
  };

  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Stopite v stik z nami in se pridružite naši skupnosti. Radi vam bomo odgovorili na vsa vprašanja."
      />
      <ContactContainer />

      <div className="container mx-auto px-4 py-12">
        <FormContainer onSubmitSuccess={handleFormSubmitSuccess} />
      </div>
    </>
  );
};
export default Contact;


