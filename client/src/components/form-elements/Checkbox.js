import React from "react";
import { Field } from "formik";
import "../../styles/components/formElements/formElement.css";

function Checkbox(props) {
  const { label, name, id, ...rest } = props;
  return (
    <div className="d-flex gap-3 align-items-center">
      <Field name={name} {...rest}>
        {({ field }) => {
          return (
            <>
              <input
                className="inp-cbx"
                type="checkbox"
                name={name}
                id={id}
                {...field}
                style={{ display: "none" }}
              />
              <label className="cbx" htmlFor={name}>
                <span>
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L7 11L17 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{label}</span>
              </label>
            </>
          );
        }}
      </Field>
    </div>
  );
}

export default Checkbox;
