import { FC, useState, FocusEventHandler } from "react";
import { Input, useFormValidation } from "reactjs-forms";
import ErrorList from "./ErrorList";
import { InputProps, ValidationResult } from "reactjs-forms/types";

interface MyFormControlProps extends InputProps {}
const MyFormControl: FC<MyFormControlProps> = ({
  onBlur,
  onFocus,
  className,
  ...props
}) => {
  const [errorList, setErrorList] = useState<ValidationResult>([]);
  const validation = useFormValidation();

  const blurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    setErrorList(validation(props.identity!).result[props.identity!]);
    if (onBlur) onBlur(e);
  };

  const focusHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    setErrorList([]);
    if (onFocus) onFocus(e);
  };

  return (
    <div className="control-wrapper">
      <Input
        {...props}
        onBlur={blurHandler}
        onFocus={focusHandler}
        className={className + (errorList.length > 0 ? ` error-element` : ``)}
      />
      <ErrorList errors={errorList} />
    </div>
  );
};

export default MyFormControl;
