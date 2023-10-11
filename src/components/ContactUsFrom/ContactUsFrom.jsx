import React, { useMemo, useState } from "react";
import styles from "./ContactUsFrom.module.scss";
import TextCard from "../TextCard/TextCard";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomButton from "../CustomButton/CustomButton";
import ScrollObserver from "../ScrollObserver/ScrollObserver";

const ContactUsFrom = () => {
  const options = ["email", "telegram", "whatsapp", "viber"];
  const validationRex = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    telegram: /.+/,
    phone: /\d{10}/,
  };

  const [name, setName] = useState("");
  const [typeContact, setTypeContact] = useState(options[0]);
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [contactError, setContactError] = useState(false);

  const [contactRegex, setContactRegex] = useState(validationRex.email);

  const contactPlaceholder = useMemo(() => {
    if (typeContact == "whatsapp" || typeContact == "viber") {
      setContactRegex(validationRex.phone);
      return "номер телефону";
    } else if (typeContact == "telegram") {
      setContactRegex(validationRex.telegram);
      return "нік";
    }
    setContactRegex(validationRex.email);
    return "email";
  }, [typeContact]);

  function validation() {
    setNameError(false);
    setContactError(false);
    console.log("Hello");
    if (name == "") {
      setNameError(true);
      return;
    }

    if (!contactRegex.test(contact)) {
      setContactError(true);
      return;
    }
    setName("");
    setContact("");
    setMessage("");
  }
  return (
    <ScrollObserver>
      <div style={{ marginTop: "20px" }} className={styles.form}>
        <TextCard title="Зв'яжіться з нами">
          <div className={styles.fieldsWrapper}>
            <CustomInput
              placeholder="Імʼя"
              value={name}
              error={nameError}
              onInput={(name) => {
                setName(name);
              }}
            />
            <CustomSelect
              options={options}
              value={typeContact}
              onChange={(typeContact) => {
                setTypeContact(typeContact);
              }}
            />
            <CustomInput
              value={contact}
              placeholder={`Ваш ${contactPlaceholder}`}
              error={contactError}
              onInput={(contact) => {
                setContact(contact);
              }}
            />
            <CustomTextarea
              value={message}
              placeholder="Твоє повідомлення"
              onInput={(message) => {
                setMessage(message);
              }}
            />
            <CustomButton onClick={validation}>Зв'язатися</CustomButton>
          </div>
        </TextCard>
      </div>
    </ScrollObserver>
  );
};

export default ContactUsFrom;
