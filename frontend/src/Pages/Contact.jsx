import React from "react";
import PageHeader from "../components/Headers/PageHeader";
import ContactContainer from "../components/Containers/ContactContainer";
import FormContainer from "../components/Containers/FormContainer";
import MapContainer from "../components/Containers/MapContainer";


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
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Lahko pa nam pišete tudi preko spodnjega obrazca</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Imate vprašanje ali predlog? Izpolnite spodnji obrazec in se vam bomo
            oglasili v najkrajšem možnem času.
          </p>
        </div>
        <FormContainer onSubmitSuccess={handleFormSubmitSuccess} />
      </div>
      <MapContainer position={[45.933, 14.467]} zoom={13} />
    </>
  );
};
export default Contact;


