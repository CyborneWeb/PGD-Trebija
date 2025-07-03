import React from "react";
import PageHeader from "../components/Headers/PageHeader";
import ContactContainer from "../components/Containers/ContactContainer";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Stopite v stik z nami in se pridružite naši skupnosti. Radi vam bomo odgovorili na vsa vprašanja."
      />
      <ContactContainer />
    </>
  );
};

export default Contact;
