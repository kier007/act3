import { PrimaryCustomMessages } from "reactjs-forms/types";

type TypeCustomMessage = {
  [ln: string]: PrimaryCustomMessages;
};

const validationMessages: TypeCustomMessage = {
  en: {
    isEmail: "upss! email address is invalid"
  }
};

export type LexiaProps = {
  heading: string;
  btn: string;
  placeholders: {
    [p: string]: string;
  };
  alertMsg: string;
  validation: PrimaryCustomMessages;
};

export type Laxia = {
  [ln: string]: LexiaProps;
};

const lexia: Laxia = {
  en: {
    heading: "Sign Up",
    btn: "Register Now",
    placeholders: {
      email: "Email Adress",
      fistName: "First Name",
      lastName: "Last Name",
      password: "Password",
      passwordRepeat: "Password-Repeat",
      country: "Country"
    },
    alertMsg: "Registration was succeeded!",
    validation: validationMessages["en"]
  }
};

export default lexia;
