import Checkbox from "./Checkbox";
import Input from "./Input";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "Input":
      return <Input {...rest} />;
    case "Checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
