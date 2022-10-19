import { FC } from "react";
import { ValidationResult } from "reactjs-forms/types";

type ErrorListProps = {
  errors?: ValidationResult;
};

const ErrorList: FC<ErrorListProps> = ({ errors = [] }) => {
  return (
    <div className="error">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error.msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorList;
