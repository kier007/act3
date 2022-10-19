import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useMemo,
  useState
} from "react";
import { Form, useFormValidation } from "reactjs-forms";
import MyFormControl from "./MyFormControl";
import MyFormSelect from "./MyFormSelect";
import {
  CustomValidator,
  ExtendedHTMLFormElement,
  ExtendedHTMLSelectElement
} from "reactjs-forms/types";
import countries from "./countries";
import "./styles.css";
import { LexiaProps } from "./Lexia";

type SignProps = {
  lexia: LexiaProps;
};
const Sign: FC<SignProps> = ({ lexia }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [country, setCountry] = useState("");

  const validation = useFormValidation();

  const countryList = useMemo(
    () =>
      countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      )),
    []
  );

  const changeHandler: ChangeEventHandler<
    HTMLInputElement | ExtendedHTMLSelectElement
  > = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "email":
        setEmail(value);
        break;
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordRepeat":
        setPasswordRepeat(value);
        break;
      case "country":
        setCountry(value);
        break;
    }
  };

  const submitHandler: FormEventHandler<ExtendedHTMLFormElement> = (e) => {
    e.preventDefault();
    const { isValid } = validation();

    if (isValid) alert("Registration was succeeded!");
  };

  type TypeIsEqulPasswords = (password: string) => CustomValidator;

  const isEqulPasswords: TypeIsEqulPasswords = (password) => {
    return function (value, identity) {
      return {
        msg: "passwords didn't match",
        result: password === value
      };
    };
  };

  return (
    <div className="box">
      <h2 className="heading">{lexia.heading}</h2>
      <Form onSubmit={submitHandler} autoComplete="off">
        <div className="control-wrapper">
          <MyFormControl
            type="email"
            className="control"
            placeholder={lexia.placeholders["email"]}
            identity="email"
            id="email"
            value={email}
            onChange={changeHandler}
            validation={{
              required: true,
              isEmail: true
            }}
          />
        </div>
        <div className="control-wrapper half">
          <MyFormControl
            type="text"
            className="control"
            placeholder={lexia.placeholders["fistName"]}
            identity="firstname"
            id="firstname"
            onChange={changeHandler}
            value={firstname}
            validation={{
              required: true,
              isName: true
            }}
          />
          <MyFormControl
            type="text"
            className="control"
            placeholder={lexia.placeholders["lastName"]}
            identity="lastname"
            id="lastname"
            onChange={changeHandler}
            value={lastname}
            validation={{
              required: true,
              isName: true
            }}
          />
        </div>
        <div className="control-wrapper half">
          <MyFormControl
            type="password"
            id="password"
            className="control"
            placeholder={lexia.placeholders["password"]}
            identity="password"
            onChange={changeHandler}
            value={password}
            validation={{
              required: true,
              isAlphaNumeric: true,
              minLen: 8
            }}
          />
          <MyFormControl
            type="password"
            className="control"
            placeholder={lexia.placeholders["passwordRepeat"]}
            identity="passwordRepeat"
            id="passwordRepeat"
            onChange={changeHandler}
            value={passwordRepeat}
            customValidation={{
              isEqulPasswords: isEqulPasswords(password)
            }}
          />
        </div>
        <MyFormSelect
          className="control"
          identity="country"
          id="country"
          onChange={changeHandler}
          value={country}
          validation={{
            required: true
          }}
        >
          <option value="">{lexia.placeholders["country"]}</option>
          {countryList}
        </MyFormSelect>
        <div className="control-wrapper">
          <button className="btn btn-blue">{lexia.btn}</button>
        </div>
      </Form>
    </div>
  );
};

export default Sign;
