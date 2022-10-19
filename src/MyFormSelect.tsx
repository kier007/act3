import { FC, useState, FocusEventHandler } from "react";
import { Select, useFormValidation } from "reactjs-forms";
import ErrorList from "./ErrorList";
import {
  ExtendedHTMLSelectElement,
  SelectProps,
  ValidationResult
} from "reactjs-forms/types";

interface MyFormSelectProps extends SelectProps {}
const MyFormSelect: FC<MyFormSelectProps> = ({
  children,
  onBlur,
  onFocus,
  className,
  ...props
}) => {
  const [errorList, setErrorList] = useState<ValidationResult>([]);
  const validation = useFormValidation();

  const blurHandler: FocusEventHandler<ExtendedHTMLSelectElement> = (e) => {
    setErrorList(validation(props.identity!).result[props.identity!]);
    if (onBlur) onBlur(e);
  };

  const focusHandler: FocusEventHandler<ExtendedHTMLSelectElement> = (e) => {
    setErrorList([]);
    if (onFocus) onFocus(e);
  };

  return (
    <div className="control-wrapper">
      <Select
        {...props}
        onBlur={blurHandler}
        onFocus={focusHandler}
        className={className + (errorList.length > 0 ? ` error-element` : ``)}
      >
        {children}
      </Select>
      <ErrorList errors={errorList} />
    </div>
  );
};

export default MyFormSelect;
