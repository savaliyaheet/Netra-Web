import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, type, placeholder, ...rest } = props;
  return (
    <div className="mb-4">
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field }) => {
          return (
            <input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              {...field}
              {...rest}
              className="form-control"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
